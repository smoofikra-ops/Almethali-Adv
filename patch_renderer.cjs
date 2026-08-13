const fs = require('fs');
let code = fs.readFileSync('src/components/layout/SectionRenderer.tsx', 'utf8');

// Import the new component
const importStmt = "import { SectionTransition } from './SectionTransition';";
code = code.replace("import { SectionConfig, SectionId, SectionComponentProps } from '../../types';", "import { SectionConfig, SectionId, SectionComponentProps } from '../../types';\n" + importStmt);

// Remove OrganicDivider
const organicDividerStart = code.indexOf('const OrganicDivider');
const organicDividerEnd = code.indexOf(');', organicDividerStart) + 2;
code = code.substring(0, organicDividerStart) + code.substring(organicDividerEnd);

// Find layout.map
const mapStart = code.indexOf('return (', code.indexOf('export function SectionRenderer'));
const renderCode = `  return (
    <>
      {layout.map((config, index) => {
        if (!config.enabled) return null;
        
        const Component = sectionRegistry[config.id];
        
        if (!Component) {
          if (process.env.NODE_ENV === 'development') {
            console.warn(\`Section renderer: Component not found for section id "\${config.id}"\`);
          }
          return null;
        }

        // Find next enabled section theme
        let nextTheme = null;
        for (let i = index + 1; i < layout.length; i++) {
          if (layout[i].enabled) {
            nextTheme = layout[i].theme;
            break;
          }
        }

        return (
          <React.Fragment key={config.id}>
            <div data-section={config.id}>
              <Component id={config.id} theme={config.theme} />
            </div>
            {nextTheme && <SectionTransition fromTheme={config.theme} toTheme={nextTheme} index={index} />}
          </React.Fragment>
        );
      })}
    </>
  );`;

const mapEnd = code.lastIndexOf('}'); // closing brace of SectionRenderer
code = code.substring(0, mapStart) + renderCode + '\n}\n';

fs.writeFileSync('src/components/layout/SectionRenderer.tsx', code);
console.log("Success");

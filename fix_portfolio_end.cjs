const fs = require('fs');
let code = fs.readFileSync('src/components/gallery/PortfolioGrid.tsx', 'utf8');

const target = `      {/* Fullscreen Studio Modal */}
      <ServiceGalleryStudio
        isOpen={selectedImageIndex !== null}
          onClose={() => setSelectedImageIndex(null)}
          images={images}
          mainTitle={categoryTitle}
          subTitle={subTitle}
          isRtl={isRtl}
        initialIndex={selectedImageIndex ?? 0}
      />
    </AnimatePresence>
  );
}`;

const replacement = `      {/* Fullscreen Studio Modal */}
      <ServiceGalleryStudio
        isOpen={selectedImageIndex !== null}
        onClose={() => setSelectedImageIndex(null)}
        images={images}
        mainTitle={categoryTitle}
        subTitle={subTitle}
        isRtl={isRtl}
        initialIndex={selectedImageIndex ?? 0}
      />
      )}
    </AnimatePresence>,
    document.body
  );
}`;

code = code.replace(target, replacement);
fs.writeFileSync('src/components/gallery/PortfolioGrid.tsx', code);
console.log("Fixed PortfolioGrid end");

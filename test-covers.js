const names = [
  "اللوحات الإعلانية",
  "الفعاليات والمؤتمرات",
  "المعارض والأكشاك",
  "الطباعة الرقمية والتنفيذ",
  "الاستاندات ووسائل العرض",
  "الهدايا الدعائية",
  "اللوحات الاعلانية",
  "الفعاليات و المؤتمرات",
  "المعارض و الأكشاك",
  "الطباعة الرقمية",
  "الطباعة الرقمية و التنفيذ",
  "الاستاندات و وسائل العرض",
  "الهدايا",
  "1", "2", "3", "4", "5", "6",
  "1-advertising-signage",
  "2-events-conferences",
  "3-exhibitions-booths",
  "4-digital-printing-execution",
  "5-display-stands",
  "6-promotional-gifts"
];
const exts = ["jpg", "jpeg", "png", "webp", "JPG", "JPEG", "PNG", "WEBP", "jpg.jpeg", "jpeg.jpg", "webp.jpg"];
const urlPrefix = "https://nmolabs-cdn.b-cdn.net/almithali-assets/02-website/Service-cardcovers/";

async function check() {
  for (const name of names) {
    for (const ext of exts) {
      const url = urlPrefix + encodeURIComponent(name).replace(/%20/g, '%20') + "." + ext;
      try {
        const res = await fetch(url, { method: 'HEAD' });
        if (res.ok) {
          console.log("FOUND: " + url);
        }
      } catch (e) {}
    }
  }
}
check();

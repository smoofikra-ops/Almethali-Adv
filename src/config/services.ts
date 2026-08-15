export interface SubService {
  id?: string;
  storagePath?: string;
  arName: string;
  enName: string;
  driveUrl: string;
  folderId: string;
  gallery?: string[];
}

export interface ServiceCategory {
  id: string;
  slug: string;
  arTitle: string;
  enTitle: string;
  arDesc: string;
  enDesc: string;
  coverImage: string;
  altTextAr: string;
  altTextEn: string;
  internalServices: SubService[];
  gallery: string[];
  enabled: boolean;
  order: number;
}

export const servicesConfig = {
  categories: [
    {
      id: "advertising-signage",
      slug: "advertising-signage",
      arTitle: "اللوحات الإعلانية",
      enTitle: "Advertising Signage",
      arDesc: "لوحات إعلانية وشاشات عرض رقمية مصممة بأحدث التقنيات لجذب الانتباه في جميع الأوقات.",
      enDesc: "Billboards and digital displays designed with the latest technologies to attract attention at all times.",
      coverImage: "https://res.cloudinary.com/e0zb5lw9/image/upload/v1785974205/Outdoor_Signage_kbzm4z.png",
      altTextAr: "اللوحات الإعلانية",
      altTextEn: "Advertising Signage",
      internalServices: [
        { id: "project-site-fences-signage", storagePath: "almithali-assets/05-services/1-advertising-signage/project-site-fences-signage", arName: "أسوار ولوحات المشاريع", enName: "Project Fences & Signage", driveUrl: "https://drive.google.com/open?id=1ovKk9iUaii-vdJGUid6_rLxyMKRFToxg&usp=drive_copy", folderId: "1ovKk9iUaii-vdJGUid6_rLxyMKRFToxg", gallery: [
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/009ce439-32a5-4b37-9df1-6f96dbd83902.png",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/01%20(16).JPG",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/01%20(7).jpg",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/044c4e0f-7df9-450c-8fa2-3b48a29378ef.png",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/0816a603-62eb-4269-8b32-2ac5db91d590.jpg",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/09b7c692-38f0-4eae-afa5-2e2c69fab791.png",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/101ce58f-e273-49a1-97ff-4052a2ee5909.jpg",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/11.png",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/142fbc94-a1f4-45ed-8bca-9bdb1f2389a6.png",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/1434326b-f2e8-4b3e-88b3-d597ea8e69f8.png",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/1a623a7c-7241-4c93-bda3-de1ff37b31d4.png",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/1ae86dec-fe73-4a3a-a682-d5ed0132bdbc.png",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/1d3844f7-08bf-4654-bbf3-572b518397a2.png",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/%D9%A2%D9%A0%D9%A1%D9%A9%D9%A0%D9%A9%D9%A0%D9%A1_%D9%A1%D9%A3%D9%A5%D9%A9%D9%A2%D9%A2.jpg",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/%D9%A2%D9%A0%D9%A1%D9%A9%D9%A0%D9%A9%D9%A0%D9%A1_%D9%A1%D9%A3%D9%A5%D9%A9%D9%A4%D9%A9.jpg",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/%D9%A2%D9%A0%D9%A1%D9%A9%D9%A0%D9%A9%D9%A0%D9%A1_%D9%A1%D9%A4%D9%A0%D9%A2%D9%A0%D9%A5.jpg",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/%D9%A2%D9%A0%D9%A1%D9%A9%D9%A0%D9%A9%D9%A0%D9%A1_%D9%A1%D9%A4%D9%A0%D9%A2%D9%A5%D9%A4.jpg",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/%D9%A2%D9%A0%D9%A1%D9%A9%D9%A0%D9%A9%D9%A0%D9%A1_%D9%A1%D9%A4%D9%A0%D9%A4%D9%A4%D9%A6.jpg",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/%D9%A2%D9%A0%D9%A1%D9%A9%D9%A0%D9%A9%D9%A0%D9%A1_%D9%A1%D9%A4%D9%A0%D9%A4%D9%A5%D9%A7.jpg",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/%D9%A2%D9%A0%D9%A1%D9%A9%D9%A0%D9%A9%D9%A0%D9%A1_%D9%A1%D9%A4%D9%A0%D9%A6%D9%A0%D9%A9.jpg",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/%D9%A2%D9%A0%D9%A2%D9%A1%D9%A0%D9%A7%D9%A1%D9%A3_%D9%A1%D9%A9%D9%A0%D9%A8%D9%A2%D9%A9.jpg",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/%D9%A2%D9%A0%D9%A2%D9%A1%D9%A0%D9%A7%D9%A1%D9%A3_%D9%A1%D9%A9%D9%A0%D9%A9%D9%A1%D9%A1.jpg",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/%D9%A2%D9%A0%D9%A2%D9%A1%D9%A0%D9%A7%D9%A1%D9%A3_%D9%A1%D9%A9%D9%A0%D9%A9%D9%A3%D9%A0_%D9%A0%D9%A1.jpg",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/%D9%A2%D9%A0%D9%A2%D9%A1%D9%A0%D9%A9%D9%A1%D9%A5_%D9%A1%D9%A1%D9%A4%D9%A3%D9%A2%D9%A8.jpg",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/%D9%A2%D9%A0%D9%A2%D9%A1%D9%A0%D9%A9%D9%A2%D9%A0_%D9%A1%D9%A3%D9%A4%D9%A9%D9%A5%D9%A9.jpg",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/%D9%A2%D9%A0%D9%A2%D9%A1%D9%A0%D9%A9%D9%A2%D9%A1_%D9%A1%D9%A7%D9%A3%D9%A0%D9%A1%D9%A6.jpg",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/%D9%A2%D9%A0%D9%A2%D9%A1%D9%A0%D9%A9%D9%A2%D9%A1_%D9%A1%D9%A7%D9%A3%D9%A0%D9%A4%D9%A8.jpg",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/%D9%A2%D9%A0%D9%A2%D9%A1%D9%A0%D9%A9%D9%A2%D9%A2_%D9%A1%D9%A6%D9%A3%D9%A5%D9%A3%D9%A2.jpg",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/2519677c-5c64-4a5a-b32b-5dd0085422dc.jpg",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/27105435-6887-4aa5-a2a3-84ce145f44ca.jpg",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/2d7b241f-7c71-4170-b500-379ea22f6fa2.png",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/2ff71158-491a-4aae-bad1-e8318b238657.png",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/335d5646-4dce-4a4d-aa86-30758316544f.png",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/36afc321-720b-4e2b-a806-d9408eb5ffc1.jpg",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/3bc4df49-ae55-4eca-8640-1af1edbeaaff.png",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/3c1a88fe-7737-4177-abe6-b787367f6097.jpg",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/3ffc8c94-57b8-4590-aea1-4aa3b16de67f.png",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/43f9eba0-a9ec-4036-819c-2ff7c093a062.png",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/450b577a-6bff-4743-9ab4-76ee24f5382c.png",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/454b06d3-5397-4130-ba0c-ab24eb120876.png",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/493b5970-d732-49f2-afd6-223561c77e95%20(1).png",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/4f14e079-8417-41dc-a64a-460bb53457b2.png",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/4f91ef8f-f422-4ada-9a18-6914197e729f.png",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/52354bb9-94f0-494a-a020-596673d5d897.png",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/52438d9e-8d75-4358-a374-b19a817071a5.jpg",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/58cf2afb-2852-4a13-bf51-b269354315d6.jpg",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/6542891d-3d2b-4010-b5f9-75b4e366933f%20(1).png",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/669ce954-2ea1-4f0b-8867-bada6973184e.png",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/672cb2d0-ac5a-4062-bd7f-484e42e01c3c.jpg",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/68d31707-c311-48ba-97dd-a018eabfd18f.png",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/6b2e527e-73bd-4760-92e1-b9b54bbf4d98.png",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/7189c3cf-6709-4586-bd2c-8bfdc601e195.jpg",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/7687702b-ee71-41bf-a9b7-33660647fdbf.jpg",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/7c4d65e2-b654-4d52-abe5-8ced4987c3c0.jpg",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/8793e8d0-354e-45e7-b966-5acd0f2af7c8.png",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/87e06cdc-776a-44bf-bb47-fc7202540c13.png",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/88fedc9a-c43f-4aaa-8060-94c54d8d5ada.png",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/89d0f0c4-a718-4227-b1ea-a9f437ce29e4.jpg",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/89fd76a6-3af8-4452-8663-c55105448f99.png",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/8cf91d7d-91b1-4a88-bb46-cb1505393b25.png",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/8de85a01-6554-401f-82b4-67936727d111.jpg",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/8f9c42c1-999a-41b7-acff-e8ba14c76c0b.png",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/9579a902-ba79-4a03-91e7-15ddf34696a9.png",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/9611ab37-1ad9-4d6e-9ee0-73b8816857bd.png",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/97296076-8594-444f-bb38-946fccbdc6d3.png",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/9e427b15-70f6-4f03-8838-a080f0222820.png",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/9ef5583c-eb19-487e-b038-bbfcedb0464b.jpg",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/9f014f71-5e40-4df1-b1e2-4dc39488a809.png",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/a20686cb-9918-4fe3-a2c9-944087562613.png",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/a61eb78f-a194-482e-8e7a-6c6125fcdc7b.jpg",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/ac8c8c4e-64ca-4b03-9e25-509e32ca9856.jpg",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/add9f4d1-66f4-404e-8f29-fbe74dc4eeb3.jpg",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/aed9de96-5f41-4b6a-a867-adfcec982eaa.png",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/b2f9a953-d32b-47e0-9f1a-a1a899ea3425.png",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/b6c01069-c760-4249-8083-86035521da24.png",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/bb168914-328f-4de8-b5d2-9af97e8ea207.jpg",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/bb188658-c20a-410e-ad69-2c4ac4030407.png",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/bb78589a-54ac-4919-9861-1294650c6c8a.png",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/be79aed6-2550-4fc4-8969-6347f2457d51.png",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/c0bc7c33-f391-4338-bdf0-f11f2e0a52cf.png",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/c442966a-aa91-4feb-a144-bb3342190f13.png",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/c535e233-4d6d-4118-805b-66dfc1755521.png",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/c57251b0-582f-46d7-9935-c97da30384c9.jpg",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/c62d7ca4-abed-4db9-8c62-070b6136ae8f.png",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/c7b1940f-bb5f-4353-b424-25768e4c96dc.png",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/cd0cbbd9-f96e-4091-ae28-712a14569cfd.png",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/cd566ff4-a91d-4e07-a6a1-9d9e065b69ee.png",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/ce9d5870-8906-4b00-91f7-e9aa108a5bf3.jpg",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/d0039615-ca31-4277-a0fb-0e27c911eb65.png",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/d0425d09-f5a0-451b-980b-a8ec606369c6.png",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/d118dd20-f867-4032-a277-dac70f82aa23.png",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/d26a6ba2-f826-444d-bcdf-599b56c4954b.png",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/d2a7afd8-71ff-453f-bb6a-4b12c851247f.jpg",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/d528815a-6ca1-4538-82fc-14f062883826.png",
          "https://nmolabs-cdn.b-cdn.net/almithali-assets/05-services/1-advertising-signage/project-site-fences-signage/d8cf3618-121d-462b-a7c5-c20df5789083.png"
] },
        { id: "acrylic", storagePath: "almithali-assets/05-services/1-advertising-signage/acrylic", arName: "أكريليك", enName: "Acrylic", driveUrl: "https://drive.google.com/open?id=1kpPuxSC_hrnsiVdqDDtT2mxgmToQ0HEj&usp=drive_copy", folderId: "1kpPuxSC_hrnsiVdqDDtT2mxgmToQ0HEj" },
        { id: "indoor-outdoor-signage", storagePath: "almithali-assets/05-services/1-advertising-signage/indoor-outdoor-signage", arName: "اللوحات الداخلية والخارجية", enName: "Indoor & Outdoor Signage", driveUrl: "https://drive.google.com/open?id=1E_m83SLHrpXRhTHY9lFJ347MFp0r2Hhg&usp=drive_copy", folderId: "1E_m83SLHrpXRhTHY9lFJ347MFp0r2Hhg" },
        { id: "forex-board", storagePath: "almithali-assets/05-services/1-advertising-signage/forex-board", arName: "فوركس", enName: "Forex", driveUrl: "https://drive.google.com/open?id=1KRHLDFG_ngvG5d30n68GP-E0t8g0SpDy&usp=drive_copy", folderId: "1KRHLDFG_ngvG5d30n68GP-E0t8g0SpDy" },
        { id: "canvas", storagePath: "almithali-assets/05-services/1-advertising-signage/canvas", arName: "كانفاس", enName: "Canvas", driveUrl: "https://drive.google.com/open?id=15Rwfherb5IurfGtCxsNgZqY6kmT3WYvm&usp=drive_copy", folderId: "15Rwfherb5IurfGtCxsNgZqY6kmT3WYvm" }
      ],
      gallery: [],
      enabled: true,
      order: 1
    },
    {
      id: "events-conferences",
      slug: "events-conferences",
      arTitle: "الفعاليات والمؤتمرات",
      enTitle: "Events & Conferences",
      arDesc: "تصميم وتنفيذ متكامل للفعاليات والمؤتمرات لخلق تجربة فريدة لا تُنسى لزوارك.",
      enDesc: "Complete design and execution for events and conferences to create a unique and unforgettable experience for your visitors.",
      coverImage: "https://res.cloudinary.com/e0zb5lw9/image/upload/v1785974204/Events_Conferences_jcex2w.webp",
      altTextAr: "الفعاليات والمؤتمرات",
      altTextEn: "Events & Conferences",
      internalServices: [
        { id: "photography-media-production", storagePath: "almithali-assets/05-services/3-events-conferences/photography-media-production", arName: "التصوير والإنتاج الإعلامي", enName: "Photography & Media Production", driveUrl: "https://drive.google.com/open?id=1rm7rQc3QrUSQDH-8QoVP_Fcaabfb6KVd&usp=drive_copy", folderId: "1rm7rQc3QrUSQDH-8QoVP_Fcaabfb6KVd" },
        { id: "screens-lighting", storagePath: "almithali-assets/05-services/3-events-conferences/screens-lighting", arName: "الشاشات والإضاءات", enName: "Screens & Lighting", driveUrl: "https://drive.google.com/open?id=1bvdjVvonRD87fJ_5GDakfo6sjk9ozW9v&usp=drive_copy", folderId: "1bvdjVvonRD87fJ_5GDakfo6sjk9ozW9v" },
        { id: "event-setup-execution", storagePath: "almithali-assets/05-services/3-events-conferences/event-setup-execution", arName: "تجهيز وتنفيذ الفعاليات", enName: "Event Setup & Execution", driveUrl: "https://drive.google.com/open?id=1xx_8ICKGe5T4JcanudoW6ay79uLZNGsT&usp=drive_copy", folderId: "1xx_8ICKGe5T4JcanudoW6ay79uLZNGsT" }
      ],
      gallery: [],
      enabled: true,
      order: 2
    },
    {
      id: "exhibitions-booths",
      slug: "exhibitions-booths",
      arTitle: "المعارض والأكشاك",
      enTitle: "Exhibitions & Booths",
      arDesc: "تصميم وتنفيذ متكامل لأجنحة المعارض والأكشاك لخلق تجربة فريدة.",
      enDesc: "Complete design and execution for exhibition stands and booths to create a unique experience.",
      coverImage: "https://res.cloudinary.com/e0zb5lw9/image/upload/v1785974205/Exhibition_Stands_Kiosks_qde6rw.jpg",
      altTextAr: "المعارض والأكشاك",
      altTextEn: "Exhibitions & Booths",
      internalServices: [
        { id: "kiosks", storagePath: "almithali-assets/05-services/4-exhibitions-kiosks/kiosks", arName: "أكشاك", enName: "Kiosks", driveUrl: "https://drive.google.com/open?id=1YwcjpmcSHRT728nxleI_MBF1aiNaVNGf&usp=drive_copy", folderId: "1YwcjpmcSHRT728nxleI_MBF1aiNaVNGf" },
        { id: "pop-up", storagePath: "almithali-assets/05-services/4-exhibitions-kiosks/pop-up", arName: "بوب أب", enName: "Pop-Up", driveUrl: "https://drive.google.com/open?id=1czuBkQ_uG-ugfWr1NKCNVqmybl0GrKJk&usp=drive_copy", folderId: "1czuBkQ_uG-ugfWr1NKCNVqmybl0GrKJk" },
        { id: "booths", storagePath: "almithali-assets/05-services/4-exhibitions-kiosks/booths", arName: "بوثات", enName: "Booths", driveUrl: "https://drive.google.com/open?id=1XQbqUGwRZSRpFG9ufbjxoL98-ID8lmH4&usp=drive_copy", folderId: "1XQbqUGwRZSRpFG9ufbjxoL98-ID8lmH4" }
      ],
      gallery: [],
      enabled: true,
      order: 3
    },
    {
      id: "digital-printing-production",
      slug: "digital-printing-production",
      arTitle: "الطباعة الرقمية والتنفيذ",
      enTitle: "Digital Printing & Production",
      arDesc: "حلول طباعة رقمية متقدمة وتصنيع عالي الجودة.",
      enDesc: "Advanced digital printing and high-quality production solutions.",
      coverImage: "https://res.cloudinary.com/e0zb5lw9/image/upload/v1785974204/Digital_Printing_Execution_xkx3df.png",
      altTextAr: "الطباعة الرقمية والتنفيذ",
      altTextEn: "Digital Printing & Production",
      internalServices: [
        { id: "car-stickers", storagePath: "almithali-assets/05-services/2-digital-printing-execution/car-stickers", arName: "استيكرات سيارات", enName: "Car Stickers", driveUrl: "https://drive.google.com/open?id=1q4xA3VSHPFhHmOL7KTfFM8GkRL16O6wF&usp=drive_copy", folderId: "1q4xA3VSHPFhHmOL7KTfFM8GkRL16O6wF" },
        { id: "uv-printing", storagePath: "almithali-assets/05-services/2-digital-printing-execution/uv-printing", arName: "طباعة UV", enName: "UV Printing", driveUrl: "https://drive.google.com/open?id=1-pVLj1M-eUcZqFNtZ7I3sEng_9622jkA&usp=drive_copy", folderId: "1-pVLj1M-eUcZqFNtZ7I3sEng_9622jkA" },
        { id: "flags", storagePath: "almithali-assets/05-services/2-digital-printing-execution/flags", arName: "أعلام", enName: "Flags", driveUrl: "https://drive.google.com/open?id=1rSWiz9Y1h8aHDbi_Htge9yjWD4__-QaQ&usp=drive_copy", folderId: "1rSWiz9Y1h8aHDbi_Htge9yjWD4__-QaQ" },
        { id: "fabric", storagePath: "almithali-assets/05-services/2-digital-printing-execution/fabric", arName: "فابريك", enName: "Fabric", driveUrl: "https://drive.google.com/open?id=1T9wMrekfYvXv7IDRrXCJ1aPSJT99sRqI&usp=drive_copy", folderId: "1T9wMrekfYvXv7IDRrXCJ1aPSJT99sRqI" },
        { id: "sticker-works", storagePath: "almithali-assets/05-services/2-digital-printing-execution/sticker-works", arName: "أعمال الاستيكر", enName: "Sticker Works", driveUrl: "https://drive.google.com/open?id=11vYMpPd6Pq-KnJ4RTOaPr0movpSwjm-7&usp=drive_copy", folderId: "11vYMpPd6Pq-KnJ4RTOaPr0movpSwjm-7" },
        { id: "mics", storagePath: "almithali-assets/05-services/2-digital-printing-execution/mics", arName: "مايكات", enName: "Mics", driveUrl: "https://drive.google.com/open?id=1ppzeugX-sTgjSN8ukGgZ9pkhmt-e79Kw&usp=drive_copy", folderId: "1ppzeugX-sTgjSN8ukGgZ9pkhmt-e79Kw" },
        { id: "banner-works", storagePath: "almithali-assets/05-services/2-digital-printing-execution/banner-works", arName: "أعمال البنر", enName: "Banner Works", driveUrl: "https://drive.google.com/open?id=1or_DA4vbsRWo5X6EP5PYu06qzp5Je9a8&usp=drive_copy", folderId: "1or_DA4vbsRWo5X6EP5PYu06qzp5Je9a8" },
        { id: "sashes", storagePath: "almithali-assets/05-services/2-digital-printing-execution/sashes", arName: "وشاحات", enName: "Sashes", driveUrl: "https://drive.google.com/open?id=1Xc3F6NbcgqJeZxWxvNtmGAvHcxsk0xqT&usp=drive_copy", folderId: "1Xc3F6NbcgqJeZxWxvNtmGAvHcxsk0xqT" },
        { id: "safety", storagePath: "almithali-assets/05-services/2-digital-printing-execution/safety", arName: "سيفتي", enName: "Safety", driveUrl: "https://drive.google.com/open?id=13CpIRP-KJkLecsmOh2_i7HkjF7IYODCy&usp=drive_copy", folderId: "13CpIRP-KJkLecsmOh2_i7HkjF7IYODCy" },
        { id: "uniforms", storagePath: "almithali-assets/05-services/2-digital-printing-execution/uniforms", arName: "يونيفورم", enName: "Uniforms", driveUrl: "https://drive.google.com/open?id=1ZalBzmFngTNXVHa83Yok6mFnTkxMzYT8&usp=drive_copy", folderId: "1ZalBzmFngTNXVHa83Yok6mFnTkxMzYT8" }
      ],
      gallery: [],
      enabled: true,
      order: 5
    },
    {
      id: "display-stands",
      slug: "display-stands",
      arTitle: "الاستاندات ووسائل العرض",
      enTitle: "Display Stands",
      arDesc: "استندات عرض مبتكرة تعزز احترافية علامتك وتقدم منتجاتك بأبهى صورة.",
      enDesc: "Innovative display stands that enhance the professionalism of your brand and present your products perfectly.",
      coverImage: "https://res.cloudinary.com/e0zb5lw9/image/upload/v1785974205/Display_Stands_Display_Solutions_btjbf6.png",
      altTextAr: "الاستاندات ووسائل العرض",
      altTextEn: "Display Stands",
      internalServices: [
        { id: "roll-up-stand", storagePath: "almithali-assets/05-services/5-stands-display-solutions/roll-up-stand", arName: "استاند رول أب", enName: "Roll Up Stand", driveUrl: "https://drive.google.com/open?id=11RxSVaCmzdk5OyBjL0_g_tBmAoawazmC&usp=drive_copy", folderId: "11RxSVaCmzdk5OyBjL0_g_tBmAoawazmC" },
        { id: "lama-stand", storagePath: "almithali-assets/05-services/5-stands-display-solutions/lama-stand", arName: "لاما استاند", enName: "Lama Stand", driveUrl: "https://drive.google.com/open?id=194wI4iScgYoU3C00ASJ8mulY4O7t8Qno&usp=drive_copy", folderId: "194wI4iScgYoU3C00ASJ8mulY4O7t8Qno" },
        { id: "product-stands", storagePath: "almithali-assets/05-services/5-stands-display-solutions/product-stands", arName: "استاندات منتجات", enName: "Product Stands", driveUrl: "https://drive.google.com/open?id=1SrvPrHQ9Y4KgKU4VhvIwGSf-RkDgymlW&usp=drive_copy", folderId: "1SrvPrHQ9Y4KgKU4VhvIwGSf-RkDgymlW" },
        { id: "welcome-gates", storagePath: "almithali-assets/05-services/5-stands-display-solutions/welcome-gates", arName: "بوابات ترحيبية", enName: "Welcome Gates", driveUrl: "https://drive.google.com/open?id=1CUvizmoHJyZIZKUKFYeZgrJSNp1lcRRr&usp=drive_copy", folderId: "1CUvizmoHJyZIZKUKFYeZgrJSNp1lcRRr" },
        { id: "pop-up", storagePath: "almithali-assets/05-services/5-stands-display-solutions/pop-up", arName: "بوب أب", enName: "Pop Up", driveUrl: "https://drive.google.com/open?id=1a_owwMn-_KtoOQMLlQDfql00OEWVT8iE&usp=drive_copy", folderId: "1a_owwMn-_KtoOQMLlQDfql00OEWVT8iE" },
        { id: "stand-tables", storagePath: "almithali-assets/05-services/5-stands-display-solutions/stand-tables", arName: "طاولات استاند", enName: "Stand Tables", driveUrl: "https://drive.google.com/open?id=1wTIkK-g53UhF-B04D0gof7fJOoB6JvXq&usp=drive_copy", folderId: "1wTIkK-g53UhF-B04D0gof7fJOoB6JvXq" }
      ],
      gallery: [],
      enabled: true,
      order: 6
    },
    {
      id: "promotional-gifts",
      slug: "promotional-gifts",
      arTitle: "الهدايا الدعائية",
      enTitle: "Promotional Gifts",
      arDesc: "هدايا ودروع تذكارية مخصصة تعكس هويتك وتترك أثرًا إيجابيًا ومستدامًا لدى عملائك.",
      enDesc: "Customized promotional gifts and awards that reflect your identity and leave a lasting positive impression on your clients.",
      coverImage: "https://res.cloudinary.com/e0zb5lw9/image/upload/v1785974206/Promotional_Gifts_e61zqy.jpg",
      altTextAr: "الهدايا الدعائية",
      altTextEn: "Promotional Gifts",
      internalServices: [
        { id: "employee-corporate-gifts", storagePath: "almithali-assets/05-services/6-corporate-promotional-gifts/employee-corporate-gifts", arName: "هدايا الموظفين والشركات", enName: "Employee & Corporate Gifts", driveUrl: "https://drive.google.com/open?id=1YVGhCoLt9CeEH2V0Gl8A8B12eRBycXh3&usp=drive_copy", folderId: "1YVGhCoLt9CeEH2V0Gl8A8B12eRBycXh3" },
        { id: "awards-plaques", storagePath: "almithali-assets/05-services/6-corporate-promotional-gifts/awards-plaques", arName: "الدروع", enName: "Awards & Plaques", driveUrl: "https://drive.google.com/open?id=1_gf7ZLKrLh7w1xHFwmA_IQomzEM3XnIB&usp=drive_copy", folderId: "1_gf7ZLKrLh7w1xHFwmA_IQomzEM3XnIB" },
        { id: "national-events", storagePath: "almithali-assets/05-services/6-corporate-promotional-gifts/national-events", arName: "المناسبات الوطنية", enName: "National Events", driveUrl: "https://drive.google.com/open?id=1NcN83hRMQ2efHDn4-aZZa7QZOzlQyD9Y&usp=drive_copy", folderId: "1NcN83hRMQ2efHDn4-aZZa7QZOzlQyD9Y" },
        { id: "leather-products", storagePath: "almithali-assets/05-services/6-corporate-promotional-gifts/leather-products", arName: "المنتجات الجلدية", enName: "Leather Products", driveUrl: "https://drive.google.com/open?id=1l88CXlySSorPnkFRyT6jyavNiVfY9JcC&usp=drive_copy", folderId: "1l88CXlySSorPnkFRyT6jyavNiVfY9JcC" },
        { id: "copper-products", storagePath: "almithali-assets/05-services/6-corporate-promotional-gifts/copper-products", arName: "المنتجات النحاسية", enName: "Copper Products", driveUrl: "https://drive.google.com/open?id=1Teyd5TG8Htt0lqsQmoe3BVFZPctybEoQ&usp=drive_copy", folderId: "1Teyd5TG8Htt0lqsQmoe3BVFZPctybEoQ" },
        { id: "resin", storagePath: "almithali-assets/05-services/6-corporate-promotional-gifts/resin", arName: "ريزين", enName: "Resin", driveUrl: "https://drive.google.com/open?id=1wR0NfHw7hnUN79sh1bYhhAwNrE2CcwGb&usp=drive_copy", folderId: "1wR0NfHw7hnUN79sh1bYhhAwNrE2CcwGb" }
      ],
      gallery: [],
      enabled: true,
      order: 4
    }
  ] as ServiceCategory[]
};

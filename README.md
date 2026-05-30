# CodeWork Tech Dark Theme (SSG)
- ต้อง build โปรเจ็ตใหม่ของทุกคั้งหลังจากเขียน blog เสร็จ

Landing website ของ CodeWork Tech สร้างด้วย **Next.js App Router**, **TypeScript** และ **Tailwind CSS** สำหรับหน้า Home, Services, Projects, Team, Blog และ Contact Us พร้อม routing หลายภาษาด้วย `next-intl`

## Features

- Blog content จาก Storyblok
- Contact form ผ่าน Formspree
- SEO metadata, Open Graph, sitemap และ robots.txt
- Styling ด้วย Tailwind CSS
- Build/deploy แยกตาม branch สำหรับ staging และ production

## Tech Stack

- Next.js `13.4.19`
- React `18.2.0`
- TypeScript `5.2.2`
- Tailwind CSS `3.3.3`
- next-intl
- Storyblok React SDK
- Formspree
- Framer Motion / GSAP
- next-sitemap

## Project Structure

```text
src/
  app/          routes, pages, layouts
  components/   shared UI components
  context/      React contexts
  features/     page-level feature modules
  config/       app constants/config
  interfaces/   shared TypeScript types
public/
  images/       website images
  logo/         logos and meta images
```

## Getting Started

```bash
npm install
npm run dev
```

Local URL:

```text
http://localhost:3000
```

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Run development server |
| `npm run build` | Build production และ generate sitemap |
| `npm run start` | Run production server |
| `npm run lint` | Run Next.js ESLint |

## Environment Variables

สร้างไฟล์ `.env.local` สำหรับ local development:

```bash
ENV_URL=http://localhost:3000
STORYBLOK_ACCESS_TOKEN=''
STORYBLOK_CONTENT_VERSION=draft
STORYBLOK_REVALIDATE_TIME_SECOND=60
```

หมายเหตุ: ไม่ควร commit token, password หรือ credential จริงลง repository

## Main Routes

- `/`
- `/services`
- `/projects`
- `/team`
- `/blog`
- `/blog/[post]`
- `/contact-us`
- `/[locale]/*`

## Storyblok Content

เนื้อหา blog มาจาก Storyblok หากมีการเพิ่มหรือแก้ไข content แล้ว production/staging ยังไม่อัปเดต ให้ build และ deploy ใหม่ตาม environment ที่ต้องการ

## Analytics

เว็บไซต์มีการติดตั้ง Google Analytics แล้ว โดยดานต์และพี่แมนเป็น admin และสามารถเข้าดูข้อมูลได้

## Deployment

| Branch | URL |
| --- | --- |
| `develop` | `https://stg.codework-tech.com/` |
| `production` | `https://codework-tech.com/` |

Build command:

```bash
npm install
npm run build
```

หลัง build ให้ตรวจสอบ sitemap และ robots files โดยเฉพาะก่อน deploy ไป production

## SEO & Sitemap

- Metadata หลักอยู่ที่ `src/app/layout.tsx`
- Sitemap config อยู่ที่ `next-sitemap.config.js`
- `siteUrl` คือ `https://codework-tech.com`
- `next-sitemap` ทำงานอัตโนมัติหลัง `npm run build`

## GA4
- พี่แมน กับ กานต์ เป็น admin สามารถเข้าถึงได้

## Storyblok account 
- ดูใน slack
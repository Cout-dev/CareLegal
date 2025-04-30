'use client'
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebinars() {

  const featuredWebinars = [
    {
      title: 'Understanding Music Theory',
      description:
        'Dive deep into the fundamentals of music theory and enhance your musical skills.',
      slug: 'understanding-music-theory',
      isFeatured: true,
    },
    {
      title: 'The Art of Songwriting',
      description:
        'Learn the craft of songwriting from experienced musicians and songwriters.',
      slug: 'the-art-of-songwriting',
      isFeatured: true,
    },
    {
      title: 'Mastering Your Instrument',
      description:
        'Advanced techniques to master your musical instrument of choice.',
      slug: 'mastering-your-instrument',
      isFeatured: true,
    },
    {
      title: 'Music Production Essentials',
      description:
        'Get started with music production with this comprehensive overview.',
      slug: 'music-production-essentials',
      isFeatured: true,
    },
    {
      title: 'Live Performance Techniques',
      description:
        'Enhance your live performance skills with expert tips and strategies.',
      slug: 'live-performance-techniques',
      isFeatured: true,
    },
    {
      title: 'Digital Music Marketing',
      description:
        'Learn how to promote your music effectively in the digital age.',
      slug: 'digital-music-marketing',
      isFeatured: true,
    },
  ];

  const webinars = [
    {
      title: "गायन की मूल बातें",
      description: "शुरुआती लोगों के लिए गायन की मूल बातें सीखें",
      date: "15 मई, 2024",
      time: "शाम 7:00 बजे",
    },
    {
      title: "तबला वादन कक्षा",
      description: "तबला वादन की बुनियादी तकनीकें सीखें",
      date: "20 मई, 2024",
      time: "शाम 6:00 बजे",
    },
    {
      title: "हारमोनियम कक्षा",
      description: "हारमोनियम बजाने की कला सीखें",
      date: "25 मई, 2024",
      time: "शाम 5:00 बजे",
    },
    {
      title: "संगीत सिद्धांत",
      description: "संगीत के मूल सिद्धांतों को समझें",
      date: "30 मई, 2024",
      time: "शाम 4:00 बजे",
    },
    {
      title: "क्लासिकल डांस",
      description: "भारतीय शास्त्रीय नृत्य की मूल बातें सीखें",
      date: "5 जून, 2024",
      time: "शाम 3:00 बजे",
    },
  ];

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Musical Journey</p>
        </div>

        <div className="mt-10">
          <HoverEffect
          items={featuredWebinars.map(webinar => (
            {
              title: webinar.title,
              description: webinar.description,
              link: '/'
            }
          ))}
          />
        </div>

        <div className="mt-10 text-center">
          <Link href={"/"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All webinars
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UpcomingWebinars
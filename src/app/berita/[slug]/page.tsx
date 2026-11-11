'use client';

import React, { Suspense } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { useData } from '@/context/DataContext';
import { ArrowLeft, Share2 } from 'lucide-react';

function DetailBeritaContent() {
  const params = useParams();
  const slug = params?.slug as string;
  const { lang } = useLanguage();
  const { news } = useData();

  const article = news.find((n) => n.slug === slug || n.id === slug);

  if (!article) {
    return (
      <div className="bg-zinc-950 text-zinc-100 min-h-screen pt-40 pb-20 text-center px-6">
        <h1 className="text-2xl font-bold text-white">Artikel Tidak Ditemukan</h1>
        <p className="text-zinc-500 mt-2 text-sm">Artikel mungkin telah dipindahkan atau dihapus.</p>
        <Link
          href="/berita"
          className="inline-flex items-center px-5 py-2 rounded-lg bg-yellow-400 text-black font-bold text-xs mt-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Kembali
        </Link>
      </div>
    );
  }

  const relatedNews = news.filter((n) => n.id !== article.id).slice(0, 2);

  return (
    <div className="bg-zinc-950 text-zinc-100 pt-28 pb-24">
      {/* Back */}
      <div className="max-w-3xl mx-auto px-6 lg:px-8 py-6">
        <Link
          href="/berita"
          className="inline-flex items-center text-xs text-zinc-500 hover:text-yellow-400 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5 mr-1.5" />
          Kembali ke Berita
        </Link>
      </div>

      <article className="max-w-3xl mx-auto px-6 lg:px-8">
        {/* Meta */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4 text-xs text-zinc-500">
            <span className="text-yellow-400 font-medium">
              {lang === 'id' ? article.category : article.categoryEn}
            </span>
            <span>{article.date}</span>
            <span>{article.readTime}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
            {lang === 'id' ? article.title : article.titleEn}
          </h1>

          <div className="flex items-center justify-between border-b border-white/5 pb-6 mt-6">
            <div className="text-xs text-zinc-500">
              <span className="text-zinc-300 font-medium">{article.author}</span>
            </div>
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({ title: article.title, url: window.location.href });
                } else {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Link disalin!');
                }
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/5 text-xs text-zinc-400 hover:text-white transition-colors"
            >
              <Share2 className="w-3.5 h-3.5" />
              Bagikan
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="img-zoom-frame aspect-[16/9] w-full rounded-xl overflow-hidden mb-10">
          <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
        </div>

        {/* Content */}
        <div className="text-sm text-zinc-300 leading-relaxed space-y-6 whitespace-pre-line border-b border-white/5 pb-12">
          {lang === 'id' ? article.content : article.contentEn}
        </div>

        {/* Related */}
        {relatedNews.length > 0 && (
          <div className="mt-16 pt-12 border-t border-white/5">
            <h3 className="text-lg font-bold text-white mb-6">Artikel Terkait</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedNews.map((n) => (
                <Link
                  key={n.id}
                  href={`/berita/${n.slug}`}
                  className="group bg-white/[0.02] border border-white/5 hover:border-white/10 p-4 rounded-xl transition-colors block card-lift"
                >
                  <span className="text-[10px] text-yellow-400 block mb-1">
                    {n.category} · {n.date}
                  </span>
                  <h4 className="text-xs font-semibold text-white group-hover:text-yellow-400 transition-colors line-clamp-2">
                    {lang === 'id' ? n.title : n.titleEn}
                  </h4>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
}

export default function DetailBeritaPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-zinc-950 pt-32 text-center text-white">Memuat...</div>}>
      <DetailBeritaContent />
    </Suspense>
  );
}

import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Image src="/pokenext-logo.png" alt="Pokemon" width={100} height={100} />

      <div className="bg-white">
        <h1 className="text-primary">Title</h1>
        <p className="text-secondary">Subtitle</p>
        {/* <button className="bg-secondary text-white">Click me</button> */}
      </div>
    </div>
  );
}

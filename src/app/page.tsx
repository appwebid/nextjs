import Link from '@/components/link';

export default function Index() {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="text-center">
        <h1 className="mb-10 text-6xl font-bold">Hello World!</h1>
        <div>
          Go to{` `}
          <Link href="/example" className="underline">
            example route
          </Link>
        </div>
      </div>
    </div>
  );
}

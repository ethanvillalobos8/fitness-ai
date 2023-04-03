export default function landingPage() {
    return (
        <div className="flex w-full items-center justify-center pb-12 space-x-3" style={{ height: 'calc(100vh - 64px)' }}>
            <div className="inline-block animate-spin ease-linear rounded-full border-4 border-gray-200 border-t-[#F55959] h-10 w-10 max-sm:h-7 max-sm:w-7"></div>
            <h1 className="text-4xl max-sm:text-3xl font-bold text-zinc-50">Under Development.</h1>
        </div>
    );
}
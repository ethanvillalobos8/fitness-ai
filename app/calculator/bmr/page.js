import BmrCalculator from '@/components/BmrCalculator';

export default function bmr() {
    return (
        <div className="grid grid-cols-1 w-full content-center justify-items-center">
            <div className="flex flex-col justify-center pt-16 pb-14 w-3/4 max-w-6xl h-full space-y-8">
                <h1 className="text-4xl font-bold text-zinc-50">Basal Metabolic Rate <span className='text-[#F55959]'>(BMR)</span></h1>
                <div className='flex'>
                    <p className='text-justify text-zinc-50'>
                        Your body requires energy to perform basic functions, such as breathing, circulating
                        blood, and maintaining body temperature, even when you&apos;re at rest. This energy
                        requirement is known as your Basal Metabolic Rate (BMR), which is the minimum
                        amount of energy (measured in calories) that your body needs to perform its vital
                        functions while at rest.
                        <br></br><br></br>
                        By knowing your BMR, you can design a personalized exercise and nutrition plan that
                        takes into account your unique metabolism and caloric needs. Calculate your BMR below.
                    </p>
                </div>
                <div className='flex h-full'>
                    <BmrCalculator />
                </div>
            </div>
        </div>
    );
}
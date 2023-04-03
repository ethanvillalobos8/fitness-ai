import Calculator from '@/components/Calculator';

export default function bmr() {
    return (
        <main>
            <div className="flex w-full items-center justify-center" style={{ height: 'calc(100vh - 64px)' }}>
                <div className="flex flex-col justify-center pl-6 pt-14 w-3/4 max-w-6xl h-full space-y-8">
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
                            takes into account your unique metabolism and caloric needs. Calculating your BMR is 
                            a simple process that can be done using a BMR calculator which is available below.
                        </p>
                    </div>
                    <div className='flex h-full'>
                        <Calculator />
                    </div>
                </div>
            </div>
        </main>
    );
}
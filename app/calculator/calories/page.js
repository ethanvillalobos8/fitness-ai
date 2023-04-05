import CalorieCalculator from '@/components/CalorieCalculator';

export default function bmr() {
    return (
        <div className="grid grid-cols-1 w-full content-center justify-items-center">
            <div className="flex flex-col justify-center pt-16 pb-14 w-3/4 max-w-6xl h-full space-y-8">
                <h1 className="text-4xl font-bold text-zinc-50">Caloric Intake</h1>
                <div className='flex'>
                    <p className='text-justify text-zinc-50'>
                        Caloric intake refers to the total number of calories a person consumes in a day. It&apos;s an important concept when 
                        it comes to weight management because if you consume more calories than your body burns, you will gain weight, and 
                        if you consume fewer calories than your body burns, you will lose weight.
                        <br></br><br></br>
                        Maintaining a caloric deficit means that you are consuming fewer calories than your body burns in a day. This is 
                        important for weight loss because your body needs to burn stored fat for energy when it doesn&apos;t have enough calories 
                        from food. By consistently maintaining a caloric deficit over time, you can lose weight and improve your overall health. 
                        However, it&apos;s important to maintain a balanced diet and ensure that you are still consuming enough nutrients to support 
                        your body&apos;s needs.
                    </p>
                </div>
                <div className='flex h-full'>
                    <CalorieCalculator />
                </div>
            </div>
        </div>
    );
}
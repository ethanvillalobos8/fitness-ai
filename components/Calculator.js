'use client'

import { useState, useEffect } from "react";
import { bmr as BMR, tdee as TDEE } from '@/Calculations/bmr';

const Calculator = () => {
    const [age, setAge] = useState(23);
    const [gender, setGender] = useState('male');
    const [height, setHeight] = useState(182.88); //6ft
    const [weight, setWeight] = useState(99.7903); // 220lbs

    const [bmr, setBMR] = useState(0);
    const calculateBMR = () => {
        setBMR(BMR(weight, height, age, gender));
    };

    const activityLevels = [
            {id: '1', type:'Sedentary', details:'(little or no exercise)'},
            {id: '2', type:'Lightly Active', details:'(light exercise/sports 1-3 days/week)'},
            {id: '3', type:'Moderately Active', details:'(moderate exercise/sports 3-5 days/week)'},
            {id: '4', type:'Very Active', details:'(hard exercise/sports 6-7 days a week)'},
            {id: '5', type:'Extremely Active', details:'(very hard exercise/sports & physical job or 2x training)'},
            {id: '6', type:'Athlete', details:'(hard exercise/sports 6-7 days a week)'}
    ];
    const [tdeeValues, setTDEEValues] = useState([]);
    useEffect(() => {
        calculateBMR();
        const tdeeValues = activityLevels.map(level => TDEE(bmr, level.type));
        setTDEEValues(tdeeValues);
    }, [bmr]);

    const renderTDEE = () => {
        return (
            tdeeValues.map((tdee, index) => (
                <div key={index} className="grid grid-cols-5 content-center w-full h-full">
                    <h1 className="col-span-4 justify-self-start pl-4">{activityLevels[index].type} {activityLevels[index].details}</h1>
                    <h1 className="justify-self-end pr-4">{Math.round(tdee)}</h1>
                </div>
            ))
        )
    }

    return (
        <div className='flex flex-col w-full h-5/6 bg-tertiary rounded-md drop-shadow-xl'>
            <div className="grid grid-cols-2 w-full h-full">
                <div>
                    <h1 className="text-2xl font-bold text-left pt-6 pl-6 w-full text-zinc-50 ">Calculate Your BMR</h1>
                    <div className="flex flex-row w-full h-full items-center justify-center">
                        <div className="flex flex-col w-full h-full">
                            <div className="flex flex-col w-full px-10 space-y-4">
                                <div className="flex items-center pt-10">
                                    <label htmlFor="age" className="w-1/3 font-medium text-white">Age</label>
                                    <input
                                        type="number"
                                        name="age"
                                        id="age"
                                        placeholder="Enter your age"
                                        className="w-2/3 rounded-lg py-2 px-4 bg-primary text-gray-500 leading-tight focus:outline-none focus:border-blue-400"
                                        value={age}
                                        onChange={(e) => setAge(e.target.value)}
                                    />
                                </div>
                                <div className="flex items-center">
                                    <label htmlFor="gender" className="w-1/3 font-medium text-white">Gender</label>
                                    <select
                                        name="gender"
                                        id="gender"
                                        className="w-2/3 rounded-lg py-2 px-4 bg-primary text-gray-500 leading-tight focus:outline-2 focus:border-[#F55959]"
                                        value={gender}
                                        onChange={(e) => {setGender(e.target.value); console.log(e.target.value)}}
                                    >
                                        <option value="">Select your gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </div>
                                <div className="flex items-center">
                                    <label htmlFor="height" className="w-1/3 font-medium text-white">Height (cm)</label>
                                    <input
                                        type="number"
                                        name="height"
                                        id="height"
                                        placeholder="Enter your height"
                                        className="w-2/3 rounded-lg py-2 px-4 bg-primary text-gray-500 leading-tight focus:outline-none focus:border-blue-400"
                                        value={height}
                                        onChange={(e) => setHeight(e.target.value)}
                                    />
                                </div>
                                <div className="flex items-center">
                                    <label htmlFor="weight" className="w-1/3 font-medium text-white">Weight (kg)</label>
                                    <input
                                        type="number"
                                        name="weight"
                                        id="weight"
                                        placeholder="Enter your weight"
                                        className="w-2/3 rounded-lg py-2 px-4 bg-primary text-gray-500 leading-tight focus:outline-none focus:border-blue-400"
                                        value={weight}
                                        onChange={(e) => setWeight(e.target.value)}
                                    />
                                </div>
                                <div className="flex w-full h-full items-center justify-center pt-6">
                                    <button onClick={calculateBMR} className="flex w-28 h-8 bg-[#F55959] self-center items-center justify-center rounded-md text-primary font-bold">
                                        Calculate
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex w-full h-full bg-secondary rounded-r-md">
                    <div className="flex flex-col w-full h-full">
                        <h1 className="text-2xl font-bold text-center py-1 w-full rounded-tr-md text-zinc-50 bg-zinc-700">Results</h1>
                        <h1 className="flex text-xl font-bold items-center justify-center text-center h-1/4 w-full text-zinc-50">BMR = {Math.round(bmr)} calroies/day</h1>
                        <div className="flex flex-col text-xl font-bold items-center justify-center text-center h-full w-full text-zinc-50">
                            <div className="grid grid-cols-4 text-sm self-start font-bold text-right py-2 w-full text-zinc-50 bg-zinc-700">
                                <h1 className="col-span-3 justify-self-start pl-4">Activity</h1>
                                <h1 className="pr-4">Calories</h1>
                            </div>
                            <div className="grid grid-rows-6 w-full h-full text-sm text-left font-light content-center">
                                {renderTDEE()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calculator;

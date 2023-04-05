'use client'

import { useState, useEffect } from "react";
import { bmr as BMR, tdee as TDEE, tdee } from '@/Calculations/bmr';

const CalorieCalculator = () => {
    const [age, setAge] = useState(23);
    const [gender, setGender] = useState('male');
    const [height, setHeight] = useState(182.88); //6ft
    const [weight, setWeight] = useState(99.7903); // 220lbs
    const [activityLevel, setActivityLevel] = useState('Sedentary'); //default
    const [weightLoss, setWeightLoss] = useState('0.5 lbs'); //default
    const [recommendedCalories, setRecommendedCalories] = useState(0);

    const weightLossOptions = [
        {id: 'low', lbs:'0.5 lbs', kg:'0.2 kg'},
        {id: 'medium', lbs:'1 lbs', kg:'0.5 kg'},
        {id: 'high', lbs:'1.5 lbs', kg:'0.7 kg'},
        {id: 'extra-high', lbs:'2 lbs', kg:'1 kg'},
        {id: 'warning-high', lbs:'2.5 lbs', kg:'1.1 kg'},
        {id: 'warning-extra-high', lbs:'3 lbs', kg:'1.4 kg'},
        {id: 'warning-extreme', lbs:'5 lbs', kg:'2.3 kg'},
    ];

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
    const [calories, setCalories] = useState([]);
    useEffect(() => {
        calculateBMR();
        calculateRecommendedCalories();
        const calories = activityLevels.map(level => calculateCaloricIntake(level.type, weightLoss));
        setCalories(calories);
    }, [bmr, recommendedCalories]);

    const renderAllCalories = () => {
        return (
            calories.map((calories, index) => (
                <div key={index} className="grid grid-cols-5 content-center w-full h-full self-center">
                    <h1 className="col-span-4 justify-self-start pl-4">{activityLevels[index].type} {activityLevels[index].details}</h1>
                    <h1 className="justify-self-end pr-4">{calories}</h1>
                </div>
            ))
        )
    } 

    const calculateCaloricIntake = (activityLevel, weightLossPerWeek) => {
        calculateBMR();

        // Calculate calories needed for weight loss
        const caloricDeficitPerWeek = (parseInt(weightLossPerWeek) * 3500)/7; // 1 pound of fat = 3500 calories
        console.log(caloricDeficitPerWeek);
        const caloricIntake = TDEE(bmr, activityLevel) - caloricDeficitPerWeek;

        console.log(caloricIntake);
        return Math.round(caloricIntake);
    };

    const calculateRecommendedCalories = () => {
        const caloricIntake = calculateCaloricIntake(activityLevel, weightLoss);
        setRecommendedCalories(caloricIntake);
    }

    return (
        <div className='flex flex-col w-full h-full bg-tertiary rounded-md drop-shadow-xl'>
            <div className="grid grid-cols-2 min-[0px]:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 w-full h-full">
                <div className="flex flex-col w-full h-full">
                    <h1 className="text-2xl font-bold text-left pt-8 pl-6 w-full text-zinc-50 ">Calculate Your Recommended Caloric Intake</h1>
                    <div className="flex flex-row w-full h-full items-center justify-center">
                        <div className="flex flex-col w-full h-full pb-14 sm:pb-0 items-center justify-center">
                            <div className="flex flex-col w-full px-10 space-y-4 pb-10 justify-center">
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
                                <div className="flex items-center">
                                    <label htmlFor="activity-level" className="w-1/3 font-medium text-white">Activity Level</label>
                                    <select
                                        name="activity-level"
                                        id="activity-level"
                                        className="w-2/3 rounded-lg py-2 px-4 bg-primary text-gray-500 leading-tight focus:outline-2 focus:border-[#F55959]"
                                        value={activityLevel}
                                        onChange={(e) => {setActivityLevel(e.target.value); console.log(e.target.value)}}
                                    >
                                        <option value="">Select your Activity Level</option>
                                        <option value="Sedentary">{activityLevels[0].type} {activityLevels[0].details}</option>
                                        <option value="Lightly Active">{activityLevels[1].type} {activityLevels[1].details}</option>
                                        <option value="Moderately Active">{activityLevels[2].type} {activityLevels[2].details}</option>
                                        <option value="Very Active">{activityLevels[3].type} {activityLevels[3].details}</option>
                                        <option value="Extremely Active">{activityLevels[4].type} {activityLevels[4].details}</option>
                                        <option value="Athlete">{activityLevels[5].type} {activityLevels[5].details}</option>
                                    </select>
                                </div>
                                <div className="flex items-center">
                                    <label htmlFor="weight-loss" className="w-1/3 font-medium text-white">Weight Loss/week</label>
                                    <select
                                        name="weight-loss"
                                        id="weight-loss"
                                        className="w-2/3 rounded-lg py-2 px-4 bg-primary text-gray-500 leading-tight focus:outline-2 focus:border-[#F55959]"
                                        value={weightLoss}
                                        onChange={(e) => {setWeightLoss(e.target.value); console.log(e.target.value)}}
                                    >
                                        <option value="">Select your desired loss in lbs/week</option>
                                        <option value={weightLossOptions[0].lbs}>{weightLossOptions[0].lbs} ({weightLossOptions[0].kg})</option>
                                        <option value={weightLossOptions[1].lbs}>{weightLossOptions[1].lbs} ({weightLossOptions[1].kg})</option>
                                        <option value={weightLossOptions[2].lbs}>{weightLossOptions[2].lbs} ({weightLossOptions[2].kg})</option>
                                        <option value={weightLossOptions[3].lbs}>{weightLossOptions[3].lbs} ({weightLossOptions[3].kg})</option>
                                        <option value={weightLossOptions[4].lbs}>{weightLossOptions[4].lbs} ({weightLossOptions[4].kg})</option>
                                        <option value={weightLossOptions[5].lbs}>{weightLossOptions[5].lbs} ({weightLossOptions[5].kg})</option>
                                        <option value={weightLossOptions[6].lbs}>{weightLossOptions[6].lbs} ({weightLossOptions[6].kg})</option>
                                    </select>
                                </div>
                                <div className="flex w-full h-full items-center justify-center pt-6">
                                    <button onClick={calculateRecommendedCalories} className="flex w-28 h-8 bg-[#F55959] self-center items-center justify-center rounded-md text-primary font-bold">
                                        Calculate
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex w-full h-full">
                    <div className="flex flex-col w-full h-full bg-secondary rounded-r-md max-[767px]:rounded-b-md">
                        <h1 className="text-2xl font-bold text-center py-1 w-full min-[0px]:rounded-none max-sm:rounded-none md:rounded-tr-md lg:rounded-tr-md xl:rounded-tr-md 2xl:rounded-tr-md text-zinc-50 bg-zinc-700">Results</h1>
                        <h1 className="flex text-xl font-bold items-center justify-center text-center py-6 w-full text-zinc-50">We recommend {recommendedCalories} calories/day</h1>
                        <div className="flex flex-col text-xl font-bold items-center justify-center text-center h-full w-full text-zinc-50">
                            <div className="grid grid-cols-4 text-sm self-start font-bold text-right py-2 w-full text-zinc-50 bg-zinc-700">
                                <h1 className="col-span-3 justify-self-start pl-4">Activity</h1>
                                <h1 className="pr-4">Calories</h1>
                            </div>
                            <div className="grid grid-rows-6 w-full h-full text-sm text-left font-light content-center">
                                {renderAllCalories()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CalorieCalculator;
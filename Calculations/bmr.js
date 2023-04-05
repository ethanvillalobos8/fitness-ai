export function bmr(weight, height, age, gender) {
    // Using the Miffin-St Jeor equation
    let bmr = 0;
    gender === 'male' ? bmr = 10 * weight + 6.25 * height - 5 * age + 5 : bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    return bmr;
}

export function tdee(bmr, activityLevel) {
    let tdee = 0;
    switch (activityLevel) {
        case 'Sedentary':
            tdee = bmr * 1.275;
            break;
        case 'Lightly Active':
            tdee = bmr * 1.375;
            break;
        case 'Moderately Active':
            tdee = bmr * 1.475;
            break;
        case 'Very Active':
            tdee = bmr * 1.675;
            break;
        case 'Extremely Active':
            tdee = bmr * 1.875;
            break;
        case 'Athlete':
            tdee = bmr * 1.9;
            break;
        default:
            tdee = bmr * 1.275;
    }
    return tdee;
}
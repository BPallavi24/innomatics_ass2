// 1. ATM Withdrawal System
function atmWithdrawal(balance, amount, pin, enteredPin) {
    if (enteredPin !== pin) return "Incorrect PIN";
    if (amount > balance) return "Insufficient Funds";
    if (amount % 100 !== 0) return "Enter amount in multiples of 100";
    return `Withdrawal successful. Remaining balance: ${balance - amount}`;
}

// 2. Online Shopping Discount & Free Shipping
function calculateFinalAmount(orderAmount) {
    let discount = 0;
    if (orderAmount > 1000) discount = 0.20;
    else if (orderAmount >= 500) discount = 0.10;
    
    let finalAmount = orderAmount - (orderAmount * discount);
    let shipping = finalAmount > 50 ? 0 : 10;
    
    return finalAmount + shipping;
}

// 3. Student Grading System with Extra Credit
function calculateGrade(marks, attendance) {
    if (attendance > 90) marks += 5;
    if (marks >= 90) return "A";
    if (marks >= 80) return "B";
    if (marks >= 70) return "C";
    if (marks >= 60) return "D";
    return "F";
}

// 4. Smart Traffic Light System
function trafficLightControl(density) {
    if (density === "Heavy Traffic") return "Green for 60 seconds";
    if (density === "Moderate Traffic") return "Green for 40 seconds";
    return "Green for 20 seconds";
}

// 5. Movie Ticket Pricing with Time and Age Discount
function calculateTicketPrice(age, showTime) {
    let price = 12;
    if (showTime < 17) price *= 0.80;
    if (age > 60) price *= 0.70;
    else if (age < 12) price *= 0.60;
    return price;
}

// 6. Job Application Filter
function isEligibleForJob(age, experience, qualification) {
    return (age >= 21 && age <= 55 && experience >= 2 && qualification === "Bachelor's Degree");
}

// 7. E-commerce Coupon Redemption
function applyCoupon(orderAmount, couponCode) {
    let discount = 0, shipping = orderAmount > 200 ? 0 : 10;
    if (couponCode === "DISCOUNT10" && orderAmount > 500) discount = 0.10;
    else if (couponCode === "FREESHIP" && orderAmount > 200) shipping = 0;
    
    return orderAmount - (orderAmount * discount) + shipping;
}

// 8. Fitness Membership Plan
function choosePlan(planType, wantsTrainer, wantsDietPlan) {
    if (wantsDietPlan) return "VIP ($80/month)";
    if (wantsTrainer) return "Premium ($50/month)";
    return "Basic ($20/month)";
}

// 9. Electricity Bill Calculation with Peak Hours
function calculateElectricityBill(units, timeOfDay) {
    let rate = units <= 100 ? 5 : (units <= 300 ? 4 : 3);
    if (timeOfDay >= 20 || timeOfDay < 8) rate *= 1.10;
    return units * rate;
}

// 10. Flight Ticket Booking System
function calculateFlightFare(classType, luggageWeight, isStudent, isSenior) {
    let price = 300;
    if (classType === "Business") price += 200;
    if (classType === "First Class") price += 500;
    
    if (luggageWeight > 20) price += Math.ceil((luggageWeight - 20) / 10) * 50;
    
    if (isStudent) price *= 0.85;
    else if (isSenior) price *= 0.90;
    
    return price;
}

// Example Execution:
console.log(atmWithdrawal(2000, 500, 1234, 1234)); // Withdrawal successful. Remaining balance: 1500
console.log(calculateFinalAmount(1200)); // 960 (20% discount)
console.log(calculateGrade(85, 95)); // "A"
console.log(trafficLightControl("Moderate Traffic")); // "Green for 40 seconds"
console.log(calculateTicketPrice(65, 14)); // 8.4 (Matinee + Senior discount)
console.log(isEligibleForJob(30, 3, "Bachelor's Degree")); // true
console.log(applyCoupon(600, "DISCOUNT10")); // 540
console.log(choosePlan("Basic", true, false)); // "Premium ($50/month)"
console.log(calculateElectricityBill(150, 21)); // 660 (4 * 150 + 10% peak hour)
console.log(calculateFlightFare("Economy", 25, true, false)); // 340


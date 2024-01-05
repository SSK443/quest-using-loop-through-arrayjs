//[ no,district,+ve cases,death rate,curred rate,1st dose vaccine,2nd dose vaccine]
covid_data = [
    [1,'Ernakulam',34000,2000,23000,20000,2000],
    [2,'Idukki',14000,3000,25000,30000,1000],
    [3,'Thrissur',24000,4000,33000,24000,2500],
    [4,'Pathanamthitta',20000,2000,45000,22000,1500],
    [5,'Kozhikode',44000,5000,12000,21000,500],
    [6,'Palakkad',12000,1000,20000,23000,3400],
    [7,'Kottayam',27000,1500,27000,14000,1000],
    [8,'Kollam',14000,2500,25000,18000,2700]

]

//1. district having Highest +ve case 

console.log(' district having Highest +ve case' )
let high=covid_data.reduce((c1,c2)=>c1[2]>c2[2]?c1:c2)
console.log(`highest covid case: ${high[1]}`)
console.log(' ---------------------------------' )

//2. district having Highest 1st dose vaccine

console.log('district having Highest 1st dose vaccine ' )
let dose=covid_data.reduce((c1,c2)=>c1[5]>c2[5]?c1:c2)
console.log(`highest 1st dose vaccine: ${dose[1]}`)
console.log(' ---------------------------------' )


//3. district having lowest death rate

console.log('district having lowest death rate')
let low=covid_data.reduce((c1,c2)=>c1[3]<c2[3]?c1:c2)
console.log(`lowest death rate:${low[1]}`)
  console.log(' ---------------------------------' )


//4. sort data with +ve case in descending order

console.log('sort data with +ve case in descending order')
covid_data.sort((a,b)=>b[2]-a[2]).forEach(e=>console.log(e))
console.log(' ---------------------------------' )

//5. is district with +ve cases > 15000

console.log('is district with +ve cases > 15000')
let pos=covid_data.some(c=>c[2]>15000)
console.log(' +ve cases > 15000',pos? 'yes':'no')
console.log(' ---------------------------------' )

//6. sort data with 1st dose vaccine
console.log(' sort data with 1st dose vaccine')
covid_data.sort((a1,a2)=>a1[5]-a2[5]).forEach(r=>console.log(r[1]))
console.log(' ---------------------------------' )

//7. Print Thrissur details
console.log('Print Thrissur details')
let thrissur=covid_data.find(t=>t[1]=='Thrissur')
console.log(thrissur)
console.log(' ---------------------------------' )


//8. Print total number of positive cases
console.log('Print total number of positive cases')
let sum=covid_data.map(c=>c[2]).reduce((a,b)=>a+b)
console.log(`total number of positive cases: ${sum}`)
console.log(' ---------------------------------' )

//9. Print total number of curred cases
console.log('Print total number of curred cases')
let curred=covid_data.map(c=>c[4]).reduce((r1,r2)=>r1+r2)
console.log(`total number of curred case:${curred}`)
console.log(' ---------------------------------' )

//10. Print curred cases in Idukki
console.log('Print curred cases in Idukki')
let Idukki=covid_data.find(s=>s[1]=='Idukki')
console.log(`curred cases in Idukki:${Idukki[4]}`)
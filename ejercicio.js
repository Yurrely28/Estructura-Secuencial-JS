console.log("PUNTO 1")
let A=2
let B=5
let C=1
let a,b=0
a= 3*A - 4*B/A**2
b= (((B + C) / 2 * A + 10) * 3 * B) - 6
console.log("a)",a)
console.log("b)",b)

console.log("PUNTO 2")
let capital,ganancia = 0
capital=parseInt(prompt("Digite el capital: "))
ganancia = capital*0.012
console.log(`Gana ${ganancia}`)

console.log("PUNTO 3") 
let base,altura,area=0
base=parseFloat(prompt("Digite la base del triangulo"))
altura=parseFloat(prompt("Digite la altura del triangulo"))
area= base*altura/2
console.log(`El area del triangulo es \n${area}`)

console.log("PUNTO 4")
let salario,cautos,monto=0
cautos=parseInt(prompt("Digite la cantidad de autos que vendio: "))
monto=parseFloat(prompt("Digite el total del monto de ventas"))
base= 980000
comision= 170000
extra = 5
salario = base + (comision*cautos) + (monto*extra/100)
console.log(`El salario total es ${salario}`)

console.log("PUNTO 5")
let n1,n2,n3,n4,prom=0
n1=parseFloat(prompt("Digita la primera nota  del 40 %"))
n2=parseFloat(prompt("Digita la segunda nota del 40 %"))
n3=parseFloat(prompt("Digita la primera nota  del 60 %"))
n4=parseFloat(prompt("Digita la segunda nota  del 60 %"))
prom= ((n1+n2)/2*0.4) + ((n3+n4)/2*0.6)
console.log(`El promedio es ${prom}`)

console.log("PUNTO 6")
let edad,num=0
edad=parseInt(prompt("Digite su edad"))
num=(220-edad)/10
console.log(`El numero de pulsaciones es ${num}`)

console.log("PUNTO 7")
let v1,v2,v3,total=0
base=parseFloat(prompt("Ingrese su sueldo base"))
v1=parseFloat(prompt("Ingrese el valor de la venta numero1"))
v2=parseFloat(prompt("Ingrese el valor de la venta numero2"))
v3=parseFloat(prompt("Ingrese el valor de la venta numero2"))
total= base + ((v1+v2+v3)*0.1)
console.log(`Su sueldo es ${total} `)

console.log("PUNTO 8")
em=parseFloat(prompt("Digite la nota del examen de matematicas"))
t1m=parseFloat(prompt("Digite la nota de la tarea 1 de matematicas"))
t2m=parseFloat(prompt("Digite la nota de la tarea 2 de matematicas"))
t3m=parseFloat(prompt("Digite la nota de la tarea 3 de matematicas"))
ef=parseFloat(prompt("Digite la nota del examen de fisica"))
t1f=parseFloat(prompt("Digite la nota de la tarea 1 de fisica"))
t2f=parseFloat(prompt("Digite la nota de la tarea 2 de fisica"))
eq=parseFloat(prompt("Digite la nota del examen de quimica"))
t1q=parseFloat(prompt("Digite la nota de la tarea 1 de quimica"))
t2q=parseFloat(prompt("Digite la nota de la tarea 2 de quimica"))
t3q=parseFloat(prompt("Digite la nota de la tarea 3 de quimica"))
dm= (em*0.9) +((t1m+t2m+t3m)/3*0.1)
df= (ef*0.8) +((t1f+t2f)/2*0.2)
dq= (eq*0.85) +((t1q+t2q+t3q)/3*0.15)
console.log(`Matematicas ${dm}\nFisica ${df}\nQuimica ${dq}`)
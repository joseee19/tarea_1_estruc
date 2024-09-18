// 8
export class Person {
    private nombre: string;
    private edad: number;
    private ciudad: string;

    constructor(nombre: string, edad: number, ciudad: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.ciudad = ciudad;
    }

    public setName(namee: string): void {
        this.nombre = namee;
    }

    public setAge(agee: number): void {
        this.edad = agee;
    }

    public setCity(cityy: string): void {
        this.ciudad = cityy;
    }

    public getName(): string{
        return this.nombre;
    }

    public getAge(): number{
        return this.edad;
    }

    public getCity() {
        return this.ciudad;
    }
}

let personn: Person = new Person("Juan", 19, "Guatemala")
personn.setName("Manuel")
personn.setAge(20)
personn.setCity("Guate")
console.log(personn.getName())
console.log(personn.getAge())
console.log(personn.getCity())
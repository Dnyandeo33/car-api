import { v4 as carId } from 'uuid';


const cars = [
    {
        id: carId(),
        model: "BMW",
        price: "4526",
        description: "Bayerische Motoren Werke AG, abbreviated as BMW, is a German multinational manufacturer of luxury vehicles and motorcycles headquartered in Munich, Bavaria, Germany. The company was founded in 1916 as a manufacturer of aircraft engines, which it produced from 1917 to 1918 and again from 1933 to 1945",
        img: "https://purepng.com/public/uploads/large/purepng.com-blue-bmw-4-series-carcarbmwvehicletransport-961524659602n3gyq.png"
    },
    {
        id: carId(),
        model: "Jaguar",
        price: "3553",
        description: "Jaguar is the luxury vehicle brand of Jaguar Land Rover, a British multinational car manufacturer with its headquarters in Whitley, Coventry, England.",
        img: 'https://i.pinimg.com/originals/9b/b3/76/9bb376bbf015df989f41e3a1c628d7db.png'
    },
    {
        id: carId(),
        model: "Nisan",
        price: "3487",
        description: "Nisan in the Babylonian and Hebrew calendars is the month of the barley ripening and first month of spring. The name of the month is an Akkadian language borrowing, although it ultimately originates in Sumerian nisag first fruits",
        img: 'https://pngimg.com/d/nissan_PNG56.png'
    }
]


class Car {
    constructor(model, price, description, img) {
        this.id = carId();
        this.model = model;
        this.price = price;
        this.description = description
        this.img = img;
    }

    static getCars = () => {
        return cars;
    }

    postCar = () => {
        cars.push(this)

    }
}

export default Car;
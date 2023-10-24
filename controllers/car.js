import Car from "../models/car.js";

const carController = {
    getCars: (req, res) => {
        const cars = Car.getCars();
        res.status(200).render('car', {
            title: 'cars',
            cars: cars,
            token: req.cookies.token
        });
    },

    addCarForm: (req, res) => {
        res.status(200).render('carForm', {
            action: '/add-car',
            title: 'Add car',
            btnText: 'Add car',
            token: req.cookies.token
        });
    },

    addCar: (req, res) => {
        const { model, price, description, img } = req.body

        if (!model || !price || !description || !img) {

            res.status(400).render('message', {
                title: 'something missing',
                message: `Please fill in all the fields`,
                redirect: '/add-car-form',
                linkText: 'Add Car',
                token: req.cookies.token
            });
        } else {
            const newCar = new Car(model, price, description, img)
            newCar.postCar();
            res.status(302).redirect('/');
        }
    }
};

export default carController;

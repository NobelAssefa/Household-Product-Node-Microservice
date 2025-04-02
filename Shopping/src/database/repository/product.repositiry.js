const { CustomerModel, AddressModel } = require('../models')


// Dealing with database operation
class CustomerRepository {

    async createCustomer({ email, password, phone, salt }) {
        try {

            const customer = new CustomerModel({
                email,
                password,
                salt,
                phone,
                address: []
            })

            const customerResult = await customer.save()
            return customerResult;

        } catch (err) {
            throw new Error('unable to create a customer')
        }
    }


    async createAddres({ _id, street, postalCode, city, country }) {
        try {
            const profile = await CustomerModel.findById(_id)

            if (profile) {
                const newAddress = new AddressModel({
                    street, 
                    postalCode, 
                    city, 
                    country
                })

                await newAddress.save()

                profile.address.push(newAddress)
            }
            return await profile.save()

        } catch (err) {
            throw new Error('unable to create address')
        }
    }


    async findCustomer(email){
        try {
            const existingCustomer = await CustomerModel.findOne({email:email})
            return existingCustomer
        } catch (error) {
            throw new Error("unable to find customer");
            
            
        }
    }

    async findCustomerById({id}){

        try {
            const existingCustomer = await CustomerModel.findById(id).populate('address')
            return existingCustomer
            
        } catch (error) {
            throw new Error('unable to find customer')
            
        }
        
    }


    async wishlist(customerId){
        try {
            const profile = await CustomerModel.findById(customerId).populate('wishlist')
            return profile.wishlist
        } catch (error) {
            throw new Error('unable to find wishlist')
        }
    }
}


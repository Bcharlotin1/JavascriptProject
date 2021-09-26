# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

player1 = User.create(username: "Bee")
player2 = User.create(username: "Archy")

Domino = Pet.create(name:"Domino", gender: "F", happiness: 100, image:"/Users/biancacharlotin/Development/code/javascriptProject/frontend/stylesheet/images/dogs/Dog_Gold.png", user_id: player1.id)


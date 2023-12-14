//This is the class that will manage all your APIs

class APIManager {
  constructor() {
    this.data = {
      users: {},
      quote: "",
      pokemon: {},
      meat: "",
    }
  }

  loadData() {
    return Promise.all([
      $.get(USER_API),
      $.get(QUOTE_API),
      $.get(POKEMON_API),
      $.get(BACON_IPSUM_API)
    ])
      .then(([{ results }, { quote }, pokemonData, meatData]) => {
        const users = { mainUser: "", friends: [] }
        results.forEach((user, i) => {
          if (i === 0) {
            users.mainUser = {
              profilePic: `${user.picture.medium}`,
              firstName: `${user.name.first} `,
              lastName: `${user.name.last}`,
              location: `${user.location.state}, ${user.location.city}`
            }
          } else {
            users.friends.push({
              firstName: `${user.name.first}`,
              lastName: `${user.name.last}`
            }
            )
          }

        });
        this.data.users = users
        this.data.quote = quote
        this.data.pokemon = {
          name: pokemonData.name,
          pic: pokemonData.sprites.front_default
        }
        this.data.meat = meatData.join(" ")
      }
      )

  }
}
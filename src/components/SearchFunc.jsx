import React, { useEffect, useState } from "react";

const SearchFunc = () => {
	const [searchInput, setSearchInput] = useState("");
	const [dataPokemon, setDataPokemon] = useState([])
  const [hasilSearch, setHasilSearch] = useState([])

	const searchTyped = (e) => {
		setSearchInput(e.target.value);
	};

	const fetchPokemon = async () => {
		const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`);
		const data = await res.json();

		const storePokemon = (result) => {
      result.forEach(async (pokemon) => {
        const res = await fetch(
					`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
				);
        const data = await res.json()

        setDataPokemon((currentVal) => [...currentVal, data])
      })
    }

    storePokemon(data.results)
	};

	useEffect(() => {
		fetchPokemon();
	}, []);

	const searchPokemon = () => {
    dataPokemon.filter((val) => {
      if (dataPokemon?.name?.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase()))
        return setHasilSearch(val)
      else
        return 0
    });

    console.log(hasilSearch)
  }
  

	const enterPressed = (e) => {
    if (e.key === "Enter" && searchInput !== "") {
      console.log("halo")
      searchPokemon();
    }
	};

  // console.log(hasilSearch);

	return (
		<div className="search">
			<input
				type="text"
				placeholder="search"
				value={searchInput}
				onChange={searchTyped}
				onKeyPress={enterPressed}
			/>
      {hasilSearch?.map((v) => {
        return (
          <p>{v.name}</p>
        )
      })}
		</div>
	);
};

export default SearchFunc;

import * as React from 'react'
import { TextInput, View, Text, FlatList } from 'react-native'
import { Container, AppTitle, Description, InputWrapper } from './styles'
import { Screen, Space } from '../../components'

const pokemons = [
  { id: '1', name: 'Bulbasaur' },
  { id: '2', name: 'Ivysaur' },
  { id: '3', name: 'Venusaur' },
  { id: '4', name: 'Charmander' },
  { id: '5', name: 'Charmeleon' },
  { id: '6', name: 'Charizard' },
]

function Pokemon({ name }) {
  return (
    <>
      <View
        style={{
          height: 115,
          width: 280,
          borderRadius: 10,
          borderColor: '#000',
          borderWidth: 1,
        }}
      >
        <Text
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {name}
        </Text>
      </View>
      <Space preset="card" />
    </>
  )
}

function Home() {
  const [search, setSearch] = React.useState('')

  const renderPokemon = ({ item }) => <Pokemon name={item.name} />

  return (
    <Container>
      <Screen
        style={{
          marginTop: 40,
          paddingHorizontal: 40,
          alignItems: 'center',
        }}
      >
        <AppTitle>Pokédex</AppTitle>
        <Space />
        <Description>Search for Pokémon by name or using the National Pokédex number.</Description>
        <Space preset="large" />
        <InputWrapper>
          <TextInput
            value={search}
            onChangeText={(text) => setSearch(text)}
            placeholder="Está procurando o que??"
          />
        </InputWrapper>
        <Space preset="extra" />
        <FlatList
          refreshing={false}
          onRefresh={() => console.log('refres')}
          data={pokemons}
          renderItem={renderPokemon}
          keyExtractor={(pokemon) => pokemon.id}
        />
      </Screen>
    </Container>
  )
}

export { Home }

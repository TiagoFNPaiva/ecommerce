import { Box, Select, Input, Text, Button } from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'
import ProductList from '../components/Product/ProductList'
import { useRef, useState } from 'react'



const Shop = () => {
    const search = useRef(null) //Reference to search Input
    const [sendSearch, setSendSearch] = useState() // changing pros depending on filters
    const [sort, setSort] = useState("n_desc") // changing pros depending on filters
    const [cat, setCat] = useState('all') // changing pros depending on filters

    const searchHandler = () => { // Function that handles search command
        setSendSearch(search.current.value)
        search.current.value = ''
    }

    return (

        <Box display='flex'>
            <Box py={5}>
                <Text pb={5}> Filters:</Text>

                <label htmlFor="name">Search</label>
                <Box display='flex'>
                    <Input id="name" name="name" type="text" autoComplete="name" required ref={search} minLength="3" />
                    <Button onClick={searchHandler}>
                        <Search2Icon />
                    </Button>
                </Box>
                <Box py={5}>
                    <label htmlFor="category" >Category</label>
                    <Select id='category' onChange={(e) => setCat(e.target.value)} >
                        <option value="all">all</option>
                        <option value="men's clothing">men's clothing</option>
                        <option value="women's clothing">women's clothing</option>
                        <option value="jewelery">jewelery</option>
                        <option value="electronics">electronics</option>
                    </Select>
                </Box>

                <Box py={5}>
                    <label htmlFor="sort">Sort by</label>
                    <Select id='sort' onChange={(e) => setSort(e.target.value)} >
                        <option value="asc">Price (asc)</option>
                        <option value="desc">Price (desc)</option>
                        <option value="n_asc">Name (asc)</option>
                        <option value="n_desc">Name (desc)</option>
                    </Select>
                </Box>
            </Box>

            <ProductList sort={sort} cat={cat} search={sendSearch} />

        </Box>


    )
}

export default Shop
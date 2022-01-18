import { useRouter } from 'next/router'
import { Box, Badge, ListItem, Image, Tooltip } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons'

//Component that render each product card for the list and creates a link to each product

function ProductItem(props) {
  const router = useRouter();

  const showDetailsPageHandler = () => {
    router.push('/product/' + props.id)
  }

  return (
    <ListItem maxW='90%' cursor='pointer' onClick={showDetailsPageHandler}>
      <Box width='250px' borderWidth='1px' borderRadius='lg' overflow='hidden' >
        <Box bg='white'>
          <Image src={props.image} alt={props.title} height='200px' m='auto' />
        </Box>
        <Box p='6'>
          <Box display='flex' alignItems='baseline'>
            <Badge borderRadius='full' px='2' colorScheme='teal'>
              New
            </Badge>
            <Box
              color='gray.500'
              fontWeight='semibold'
              letterSpacing='wide'
              fontSize='xs'
              textTransform='uppercase'
              ml='2'
            >
              {props.category}
            </Box>
          </Box>
          <Tooltip label={props.title}>
            <Box
              mt='1'
              fontWeight='semibold'
              as='h4'
              lineHeight='tight'
              isTruncated
            >
              {props.title}
            </Box>
          </Tooltip>
          <Tooltip label={props.rating.rate}>
            <Box display='flex' mt='2' alignItems='center'>
              {Array(5)
                .fill('')
                .map((_, i) => (
                  <StarIcon
                    key={i}
                    color={i < Math.round(props.rating.rate) ? 'teal.500' : 'gray.300'}
                  />
                ))}
              <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                {props.rating.count} reviews
              </Box>
            </Box>
          </Tooltip>
          <Box display='flex' mt='3' justifyContent='end'>
            {props.price.toFixed(2)} €
          </Box>
        </Box>
      </Box>
    </ListItem >
  );
}

export default ProductItem;

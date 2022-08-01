import React, { useContext } from 'react'
import { Box } from '@mui/material'
import Bodypart from './Bodypart'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'

const HorizontalScrollBar = ({ data, bodyPart, setBodyPart }) => {
  return (
    <ScrollMenu>
        {data.map((item) => (
           <Box
           key={item.id || item}
           itemId={item.id || item}
           title={item.id || item}
           m="0, 40px"
         >
             <Bodypart
               item={item}
               bodyPart={bodyPart}
               setBodyPart={setBodyPart} 
             />
         </Box>
        ))}
    </ScrollMenu>
  )
}

export default HorizontalScrollBar
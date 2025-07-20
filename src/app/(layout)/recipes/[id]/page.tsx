import RecipesDetailItem from '@/components/recipes/RecipesDetailItem'
import React from 'react'

interface Props{
    params:{
        id:string
    }
}
const RecipesDetail =async ({params} : Props) => {
    const id = await params.id
    console.log(id)
   const data = await fetch(`https://dummyjson.com/recipes/${id}`)
    const recipesDeatail = await data.json()
    console.log(recipesDeatail)

  return (
    <div>
        <RecipesDetailItem data={recipesDeatail }/>
    </div>
  )
}

export default React.memo(RecipesDetail)
import RecipesDetailItem from '@/components/recipes/RecipesDetailItem'
import React from 'react'

interface Props{
    params:{
        id:string
    }
}
export default async function UserDetail({ params }: { params: Promise<{ id: string }>}){
       const {id} = await params;
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


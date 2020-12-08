import { useQuery } from "@apollo/react-hooks"

const Query = ({ children, query, id, variables }: any) => {
  const { data, loading, error } = useQuery(query, {
    variables: { id: id, variables },
  })

  if (loading) return <p>loading</p>
  if (error) return <p>Error: {JSON.stringify(error)}</p>
  return children({ data })
}

export default Query

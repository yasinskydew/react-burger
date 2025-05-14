import { useParams } from 'react-router-dom';

export default function IngridientDetailsPage() {
  const { id } = useParams();

  return (
    <div>
      <h1>Ingridient Details</h1>
      <p>{id}</p>
    </div>
  )
}

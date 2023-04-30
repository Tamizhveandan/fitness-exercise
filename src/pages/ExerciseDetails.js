import React , {useEffect,useState} from 'react'
import { Box } from '@mui/material'
import { useParams } from 'react-router-dom'
import {exerciseOptions , fetchData,youtubeOptions} from '../utils/fetchData'
import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'

const ExerciseDetails = () => {
  const [exerciseVideos , setExerciseVideos] = useState([])
  const [exerciseDetail,setExerciseDetail] = useState({})
  const [targetMuscleExercises , setTargetMuscleExercises] = useState([])
  const [equipmentExercises , setEquipmentExercises] = useState([])
  const {id} = useParams();

  useEffect(() =>{
    const fetchExercisesData = async ()=>{
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com'
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'

      const exersiceDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`,exerciseOptions)
      setExerciseDetail(exersiceDetailData)

      const exersiceVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exersiceDetailData.name}`,youtubeOptions)
      setExerciseVideos(exersiceVideosData.contents)
      
      const targetMuscleExersiceData = await fetchData(`${exerciseDbUrl}/exercises/target/${exersiceDetailData.target}`,exerciseOptions)
      setTargetMuscleExercises(targetMuscleExersiceData)

      const equipmentExersiceData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exersiceDetailData.equipment}`,exerciseOptions)
      setEquipmentExercises(equipmentExersiceData)

    }
    fetchExercisesData()
    
  },[id])

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail}/>
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises}/>
    </Box>
  )
}

export default ExerciseDetails
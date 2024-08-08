import MUIspacing from './GUI_Assignment/MUIspacing';
import AutoGrid from './GUI_Assignment/AutoGrid';
import BasicGrid from './GUI_Assignment/BasicGrid';
import ComplexFluidGrid from './GUI_Assignment/ComplexFluidGrid';
import FeaturedPost from './GUI_Assignment/FeaturedPost';
import MainFeaturedPost from './GUI_Assignment/MainFeaturedPost';
import NestedGridGroup from './GUI_Assignment/NestedGridGroup';


function App(){
  const post = {
    title: "Sample Post Title",
    date: "August 8, 2024",
    description: "This is a sample post description.",
    image: "https://via.placeholder.com/150",
    imageLabel: "Sample Image"
  };
  return (
    <>
    <MUIspacing/>
    <AutoGrid/>
    <BasicGrid/>
    <ComplexFluidGrid/>
    <FeaturedPost post={post} />
    <MainFeaturedPost post={post}/>
    <NestedGridGroup/>
    </>
  )
}

export default App;
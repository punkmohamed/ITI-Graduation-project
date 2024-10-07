/* eslint-disable react/prop-types */
import { Card } from "flowbite-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
export default function Category({ category }) {
  const { language } = useSelector(state => state.lang)
  const { mode } = useSelector(state => state.mode)
  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-4 mt-3 mx-1 md:mx-1">
      <Link to={`/menu/${category._id}`} className="bg-transparent">
        <Card className={`max-w-sm m-auto bg-transparent ${mode == 'light' ? 'catBackLight' : 'catBack h-[337px]'} bg-no-repeat bg-center bg-contain md:bg-cover  p-20 `}>
          <h5 className="text-2xl text-center font-bold tracking-tight ">
            {language == "en" ? category?.name?.en : category?.name?.ar}
          </h5>
          <p className="font-normal text-center ">
            {language == "en" ? category?.description?.en : category?.description?.ar}
          </p>
        </Card>
      </Link>
    </div>
  )
}

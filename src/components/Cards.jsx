import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import { Tilt } from "react-tilt";

const Cards = () => {
  const boxShadow = {
    sm: "540px",
    md: "720px",
    lg: "960px",
    "lg-max": { max: "960px" },
    xl: "1140px",
    "2xl": "1320px",
  };
  return (
    <>
      <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl py-4 mx-10 flex items-center justify-center mb-3">
        Select Your Steam
      </h1>
      <div className="flex flex-wrap gap-4">
        <div className="px-1">
          <Tilt>
            <Card className="w-72  border-gray-200 border">
              <CardHeader floated={false} className="mx-auto w-20 h-20">
                <img
                  src="https://www.vhv.rs/dpng/d/164-1648831_gear-clipart-engineering-symbol-mechanical-engineering-logo-hd.png"
                  alt="profile-picture"
                />
              </CardHeader>
              <CardBody className="text-center">
                <Typography variant="h4" color="blue-gray" className="mb-2">
                  Engineering
                </Typography>
              </CardBody>
            </Card>
          </Tilt>
        </div>
        <div>
          <Tilt>
            <Card className="w-72  border-gray-200 border">
              <CardHeader floated={false} className="mx-auto w-20 h-20">
                <img
                  src="https://png.pngtree.com/png-vector/20190330/ourlarge/pngtree-vector-management-icon-png-image_894670.jpg"
                  alt="profile-picture"
                />
              </CardHeader>
              <CardBody className="text-center">
                <Typography variant="h4" color="blue-gray" className="mb-2">
                  Management
                </Typography>
              </CardBody>
            </Card>
          </Tilt>
        </div>
        <div>
          <Tilt>
            <Card className="w-72 border-gray-200 border">
              <CardHeader floated={false} className="mx-auto w-20 h-20">
                <img
                  src="https://icon2.cleanpng.com/20180425/wyq/kisspng-subject-tutor-english-learning-school-5ae072d48c4b04.7748210815246589005747.jpg"
                  alt="profile-picture"
                />
              </CardHeader>
              <CardBody className="text-center">
                <Typography variant="h4" color="blue-gray" className="mb-2">
                  Arts
                </Typography>
              </CardBody>
            </Card>
          </Tilt>
        </div>
        <div>
          <Tilt>
            <Card className="w-72 border-gray-200 border">
              <CardHeader floated={false} className="mx-auto w-20 h-20">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2784/2784386.png"
                  alt="profile-picture"
                />
              </CardHeader>
              <CardBody className="text-center">
                <Typography variant="h4" color="blue-gray" className="mb-2">
                  Science
                </Typography>
              </CardBody>
            </Card>
          </Tilt>
        </div>
        <div>
          <Tilt>
            <Card className="w-72 border-gray-200 border">
              <CardHeader floated={false} className="mx-auto w-20 h-20">
                <img
                  src="https://e7.pngegg.com/pngimages/617/766/png-clipart-e-commerce-logo-web-development-e-commerce-logo-electronic-business-online-shopping-ecommerce-blue-cdr.png"
                  alt="profile-picture"
                />
              </CardHeader>
              <CardBody className="text-center">
                <Typography variant="h4" color="blue-gray" className="mb-2">
                  Commerce
                </Typography>
              </CardBody>
            </Card>
          </Tilt>
        </div>
      </div>
    </>
  );
};

export default Cards;

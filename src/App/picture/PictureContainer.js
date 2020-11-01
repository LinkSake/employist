import PictureComponent from './PictureComponent';
import {React, useRef, useState, useEffect, useCallback} from 'react';

const PictureContainer = ( props ) => {

    const webcamRef = useRef(null);
    const [imgSrc, setImgSrc] = useState(null);
    const [employee, setEmployee] = useState(props.currentEmployee);    

    const save = () => {
        props.setEmployees( props.employees.map(
            (empl) => ((empl.id === employee.id) ? 
                (setNewImage(empl, imgSrc)) : (empl)
            )
        ));
    }

    const setNewImage = (empl, img) => {
        empl.img = img;
        return empl;
    }

    useEffect(() => {
        setEmployee(props.currentEmployee);
    }, [props]);

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot({
            width: 512, 
            height: 512
        });
        setImgSrc(imageSrc);
      }, [webcamRef, setImgSrc]
    );

    return(
        <PictureComponent
        setPictureModal={props.setPictureModal}
        pictureModal={props.pictureModal}
        setImgSrc={setImgSrc}
        webcamRef={webcamRef}
        imgSrc={imgSrc}
        capture={capture}
        save={save}
        />
    );
}

export default PictureContainer;
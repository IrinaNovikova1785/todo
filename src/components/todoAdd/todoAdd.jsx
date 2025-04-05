import {useState} from "react";

export default function TodoAdd(props) {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [img, setImg] = useState('');
    const imageLoader = evt => {
        const cFiles = evt.target.files;
        if(cFiles.length < 0){
            const fileReader = new FileReader();
            fileReader.onload = () => {
                setImg(fileReader.result);
            }
            fileReader.readAsDataURL(cFiles[0]);
        } else setImg('');
    }
    const dataSubmit = evt => {
        evt.preventDefault();
        const deed = {title, desc, img, done: false};
        const date = new Date();
        deed.date = date.toLocaleString();
        deed.keyIn = date.getTime();
        props.add(deed);
        toReset();
    }
    const toReset = () => {
        setTitle('');
        setDesc('');
        setImg('');
    }
    return(
        <form className="todoAdd">
            <h1>Добавить дело</h1>
            <label>
                <p>Название дела</p>
                <input type="text" placeholder="Введите название" value={title} onChange={event => setTitle(event.target.value)}/>
            </label>
            <label>
                <p>Комментарий</p>
                <textarea placeholder="Введите комментарий" value={desc} onChange={event => setDesc(event.target.value)}/>
            </label>
            <input type="file" placeholder="Загрузить изображение" onChange={imageLoader}/>
            <button type="reset" onClick={toReset}>Сброс</button>
            <button type="submit" onClick={dataSubmit}>Создать</button>
        </form>
    );
}
import './User.css';

export default function User({item}) {
    return (
        <div className="box">
            <div className="user">
                {item.name} - {item.id}
            </div>
        </div>
    );
}

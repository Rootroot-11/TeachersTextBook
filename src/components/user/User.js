import './User.css';

export default function User({item}) {
    return (
        <div className="user">
            <form action="">
                <input type="checkbox"/>
            </form>
            {item.name} {item.id} {item.class} {item.score} {item.parents}
        </div>

    );
}

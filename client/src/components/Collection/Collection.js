import React from "react";
import {connect} from "react-redux";
import {selectCollection} from "../../Redux/Shop/shopSelector";
import "./Collection.scss"
import CollectionItem from "../CollectionItem/CollectionItem";
const Collection=({collection})=>{
    const {title,items}=collection;
    return(
    <div className="collection-page">
        <h2 className="title">{title}</h2>
        <div className="items">
            {items.map(item=>{
                return <CollectionItem key={item.id} item={item}/>
            })}
        </div>
    </div>
)
}
const mapStateToProps = (state, ownProps) => {
    return {
        collection: selectCollection(ownProps.match.params.collectionId)(state)
    }
}
export default connect(mapStateToProps,null)(Collection)
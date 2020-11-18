import {React} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import PreviewCollection from '../../components/preview-collection/preview-collection.component';

import {selectCollectionsForPreview} from '../../redux/shop/shop.selector';

import './collection-overview.styles.scss';

const CollectionsOverview =({collections})=>(
    <div className="collection-overview">
         {collections.map(({ id, title, items }) => {
                    return <PreviewCollection key={id} title={title} items={items} />
                })
         }
    </div>
)

const mapStateToProps=createStructuredSelector({
    collections:selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);

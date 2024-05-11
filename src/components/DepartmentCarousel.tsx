import { Text, Field, withDatasourceCheck, Item, NextImage, ImageField, ImageFieldValue } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type DepartmentCarouselProps = ComponentProps & {
  fields: {
    CarouselItems: Item[];
  };
};

const DepartmentCarousel = (props: DepartmentCarouselProps): JSX.Element => {

  const CarouselItems = props.fields.CarouselItems
  
  return (
    <div>
      <p>DepartmentCarousel Component</p>
      {CarouselItems &&
        CarouselItems.map((listItem, index) => (
          <div key={`sharedListItem-${index}`}>
            <p>
              <Text field={listItem.fields.CarouselItemTitle as Field<string>} />
              <NextImage field={listItem.fields.CarouselImage as Field<ImageFieldValue>} height="200" width="400"/>
            </p>
          </div>
        ))}
    </div>);
};


export default withDatasourceCheck()<DepartmentCarouselProps>(DepartmentCarousel);

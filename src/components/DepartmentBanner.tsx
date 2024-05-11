import { Text, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type DepartmentBannerProps = ComponentProps & {
  fields: {
    heading: Field<string>;
  };
};

const DepartmentBanner = (props: DepartmentBannerProps): JSX.Element => (
  <div>
    <p>DepartmentBanner Component</p>
    <Text field={props.fields.heading} />
  </div>
);

export default withDatasourceCheck()<DepartmentBannerProps>(DepartmentBanner);

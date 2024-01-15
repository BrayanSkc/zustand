import React, {Fragment, useMemo} from 'react';
import {View, StyleSheet} from 'react-native';

import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

import {ShimmerProps} from './shimmer.types';

const HEShimmer: React.FC<ShimmerProps> = ({
  quantity,
  boxStyle,
  colorSkeleton,
  contentStyle,
}) => {
  const arrayBox = useMemo(() => {
    const value = quantity < 1 ? 6 : quantity;
    return [...Array(value)];
  }, [quantity]);

  return (
    <Fragment>
      {arrayBox.map(itemKey => (
        <SkeletonPlaceholder
          backgroundColor={colorSkeleton}
          key={itemKey}>
          <View style={[styles.container, contentStyle]}>
            <View style={boxStyle} />
          </View>
        </SkeletonPlaceholder>
      ))}
    </Fragment>
  );
};

export default HEShimmer;

const styles = StyleSheet.create({
  container: {marginLeft: 20, marginTop: 20},
});

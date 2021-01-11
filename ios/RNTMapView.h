//
//  RNTMapView.h
//  wrap_mapview
//
//  Created by 鍾志豪 on 2021/1/11.
//

#import <MapKit/MapKit.h>

#import <React/RCTComponent.h>

NS_ASSUME_NONNULL_BEGIN

@interface RNTMapView : MKMapView

@property (nonatomic, copy) RCTBubblingEventBlock onRegionChange;

@end

NS_ASSUME_NONNULL_END

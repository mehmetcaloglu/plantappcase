import React, { useState } from 'react';
import { Dimensions, Image, Linking, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import FeatureCard from '../../components/FeatureCard';
import PrimaryButton from '../../components/PrimaryButton';
import { completeOnboarding } from '../../redux/slices/onboardingSlice';
import { typography } from '../../styles/theme';

const { width, height } = Dimensions.get('window');
const PaywallScreen = () => {
  const dispatch = useDispatch();
  const [selectedPlan, setSelectedPlan] = useState('yearly');

  const handleClose = () => {
    dispatch(completeOnboarding());
  };

  const handleTermsPress = () => {
    Linking.openURL('https://plantapp.app/terms');
  };

  const handlePrivacyPress = () => {
    Linking.openURL('https://plantapp.app/privacy');
  };

  const handleRestorePress = () => {
    // Restore satın almaları burada gerçekleştirilecek
    console.log('Restore purchases');
  };

  return (
    <View style={styles.container}>
      <Image 
        source={require('../../assets/images/onboarding/Paywall-Background.png')} 
        style={styles.paywallBackground}
        resizeMode="contain"
      />
      
      <SafeAreaView style={styles.content}>
        <View style={ styles.bottomContent }>
          {/* title container , title and subtitle */}
          <View style={styles.titleContainer}>
            <Text style={styles.title}><Text style={styles.titleBold}>PlantApp</Text> Premium</Text>
            <Text style={styles.subtitle}>Access All Features</Text>
          </View>
          <View style={styles.featuresContainer}>
            <ScrollView 
              horizontal 
              showsHorizontalScrollIndicator={false}
              style={styles.scrollView}
            >
              <FeatureCard 
                icon={require('../../assets/images/onboarding/Unlimited-Icon.png')} 
                title="Unlimited" 
                subtitle="Plant Identify" 
                firstCard={true}
              />
              <FeatureCard 
                icon={require('../../assets/images/onboarding/Faster-Icon.png')} 
                title="Faster" 
                subtitle="Process" 
              />
              <FeatureCard 
                icon={require('../../assets/images/onboarding/Faster-Icon.png')} 
                title="Detailed" 
                subtitle="Plant Care" 
              />
            </ScrollView>
          </View>
          {/* <Text style={ styles.title }>Premium Özellikler</Text> */}
          
          {/* padding vertical 20 */}
          <View style={{ padding: 20, width: '100%' }} >
          
          
          <View style={styles.paymentContainer}>
            {/* Plan options */}
            <TouchableOpacity 
              style={[
                styles.planOption, 
                selectedPlan === 'monthly' && styles.selectedPlanOption
              ]}
              onPress={() => setSelectedPlan('monthly')}
            >
              <View style={styles.radioContainer}>
                <View style={[
                  styles.radioOuter, 
                  selectedPlan === 'monthly' && styles.radioOuterSelected
                ]}>
                  {selectedPlan === 'monthly' && <View style={styles.radioInner} />}
                </View>
              </View>
              <View style={styles.planDetails}>
                <Text style={styles.planTitle}>1 Month</Text>
                <Text style={styles.planPrice}>$2.99/month, auto renewable</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[
                styles.planOption, 
                selectedPlan === 'yearly' && styles.selectedPlanOption
              ]}
              onPress={() => setSelectedPlan('yearly')}
            >
              <View style={styles.radioContainer}>
                <View style={[
                  styles.radioOuter, 
                  selectedPlan === 'yearly' && styles.radioOuterSelected
                ]}>
                  {selectedPlan === 'yearly' && <View style={styles.radioInner} />}
                </View>
              </View>
              <View style={styles.planDetails}>
                <Text style={styles.planTitle}>1 Year</Text>
                <Text style={styles.planPrice}>First 3 days free, then $529.99/year</Text>
              </View>
              <View style={styles.saveTag}>
                <Text style={styles.saveTagText}>Save 50%</Text>
              </View>
            </TouchableOpacity>

            <PrimaryButton 
              title="Try free for 3 days"
              onPress={() => console.log('Try free for 3 days')}
              style={styles.freeTrial}
            />
            
            <Text style={styles.paymentInfo}>
               After the 3-day free trial period you&apos;ll be charged ₺274.99 per year unless you cancel before the trial expires. Yearly Subscription is Auto-Renewable
            </Text>
            
            <View style={styles.linksContainer}>
              <Text style={styles.link} onPress={handleTermsPress}>Terms</Text>
              <Text style={styles.separator}>•</Text>
              <Text style={styles.link} onPress={handlePrivacyPress}>Privacy</Text>
              <Text style={styles.separator}>•</Text>
              <Text style={styles.link} onPress={handleRestorePress}>Restore</Text>
            </View>
          </View>
          
          </View>
          
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101e17',
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    zIndex: 10,
  },
  bottomContent: {
    
    width: '100%',
    alignItems: 'center',
    // padding: 20,
    paddingBottom: 0,
  },
  title: {
    fontSize: 30,
    fontFamily: typography.fontFamily.bold,
    color: '#FFFFFF',
    // marginBottom: 30,
  },
  titleContainer: {
    width: '100%',
    paddingHorizontal: 20,
    alignItems: 'flex-start',
    marginBottom: 20,
    // backgroundColor: 'red',
  },
  subtitle: {
    fontSize: 17,
    fontFamily: typography.fontFamily.regular,
    color: '#FFFFFF',
    opacity: 0.7,
    // marginBottom: 30,
  },
  titleBold: {
    fontFamily: typography.fontFamily.bold,
    fontWeight: 'bold',
  },
  paymentContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    // marginBottom: 30,
    alignSelf: 'stretch',
  },
  planOption: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 14,
    padding: 13,
    marginBottom: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
  selectedPlanOption: {
    borderColor: '#28AF6E',
    backgroundColor: 'rgba(40, 175, 110, 0.08)',
  },
  radioContainer: {
    marginRight: 12,
  },
  radioOuter: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioOuterSelected: {
    borderColor: '#28AF6E',
    backgroundColor: '#28AF6E',
  },
  radioInner: {
    width: 7,
    height: 7,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
  },
  planDetails: {
    flex: 1,
  },
  planTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: typography.fontFamily.medium,
    marginBottom: 4,
  },
  planPrice: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 12,
    fontFamily: typography.fontFamily.regular,
  },
  saveTag: {
    backgroundColor: '#28AF6E',
    paddingVertical: 4,
    paddingHorizontal: 8,
    // borderRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius:12,
    top: 0,
    position: 'absolute',
    right: 0,
    // text center
    textAlign: 'center',
    verticalAlign: 'middle',
  },
  saveTagText: {
    // center text
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 12,
    fontFamily: typography.fontFamily.semiBold,
  },
  freeTrial: {
    width: '100%',
    marginTop: 4,
  },
  paymentInfo: {
    color: '#FFFFFF',
    fontFamily: typography.fontFamily.regular,
    fontSize: 11,
    textAlign: 'center',
    opacity: 0.55,
    // marginBottom: 20,
    lineHeight: 16,
  },
  linksContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.55,
    marginTop: 10,
  },
  link: {
    color: '#FFFFFF',
    fontFamily: typography.fontFamily.medium,
    fontSize: 11,
    paddingHorizontal: 4,
  },
  separator: {
    color: '#FFFFFF',
    opacity: 0.5,
    fontSize: 11,
  },
  closeButton: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  closeButtonText: {
    color: '#FFFFFF',
    fontFamily: typography.fontFamily.semiBold,
    fontSize: 15,
  },
  paywallBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: width,
    height: height * 0.7,
    zIndex: 1,
  },
  featuresContainer: {
    width: '100%',
    alignItems: 'center',
    // marginLeft: 20,
    // paddingLeft: 12,
  },
  scrollView: {
    width: '100%',
  },
});

export default PaywallScreen; 
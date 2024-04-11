import React, {forwardRef, useImperativeHandle, useState} from 'react';
import {Modal, StyleSheet, View} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';

interface LoaderModalProps {}

const LoaderModal = forwardRef(function LoaderModal(
  props: LoaderModalProps,
  ref,
) {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useImperativeHandle(
    ref,
    () => {
      return {
        openModal: () => setIsVisible(true),
        closeModal: () => setIsVisible(false),
        toggleModal: () => setIsVisible(prevState => !prevState),
      };
    },
    [],
  );

  return (
    <Modal transparent visible={isVisible}>
      <View style={styles.main}>
        <ActivityIndicator animating />
      </View>
    </Modal>
  );
});

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoaderModal;

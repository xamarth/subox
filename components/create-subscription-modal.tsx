import { icons } from '@/constants/icons';
import dayjs from 'dayjs';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Modal, Platform, Pressable, ScrollView, Text, TextInput, View } from 'react-native';

interface CreateSubscriptionModalProps {
  visible: boolean;
  onClose: () => void;
  onSubmit: (subscription: Subscription) => void;
}

type Frequency = 'Monthly' | 'Yearly';
type Category = 'Entertainment' | 'AI Tools' | 'Developer Tools' | 'Design' | 'Productivity' | 'Other';
const CATEGORIES: Category[] = ['Entertainment', 'AI Tools', 'Developer Tools', 'Design', 'Productivity', 'Other'];
const CATEGORY_COLORS: Record<Category, string> = {
  'Entertainment': '#ff6b6b',
  'AI Tools': '#b8d4e3',
  'Developer Tools': '#e8def8',
  'Design': '#f5c542',
  'Productivity': '#95e1d3',
  'Other': '#d4d4d4',
};

export default function CreateSubscriptionModal({ visible, onClose, onSubmit }: CreateSubscriptionModalProps) {

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [frequency, setFrequency] = useState<Frequency>('Monthly');
  const [category, setCategory] = useState<Category>('Other');

  const isValidPrice = () => {
    const trimmedPrice = price.trim();
    if (!trimmedPrice) return false;
    // Strict numeric pattern check
    if (!/^\s*[+-]?(\d+(\.\d+)?|\.\d+)\s*$/.test(trimmedPrice)) return false;
    const numValue = Number(trimmedPrice);
    return Number.isFinite(numValue) && numValue > 0;
  };

  const isValidForm = name.trim() !== '' && isValidPrice();

  const handleSubmit = () => {
    if (!isValidForm) return;

    const priceValue = Number(price.trim());
    const now = dayjs();
    const renewalDate = frequency === 'Monthly' ? now.add(1, 'month') : now.add(1, 'year');

    const newSubscription: Subscription = {
      id: `sub-${Date.now()}`,
      name: name.trim(),
      price: priceValue,
      currency: 'USD',
      frequency,
      category,
      status: 'active',
      startDate: now.toISOString(),
      renewalDate: renewalDate.toISOString(),
      icon: icons.plus,
      billing: frequency,
      color: CATEGORY_COLORS[category],
    };

    onSubmit(newSubscription);
    resetForm();
    onClose();
  };

  const resetForm = () => {
    setName('');
    setPrice('');
    setFrequency('Monthly');
    setCategory('Other');
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  return (
    <>
      <Modal
        visible={visible}
        transparent
        animationType="slide"
        onRequestClose={handleClose}
      >
        <View className="absolute -z-1 h-full w-full bg-[#00000080] top-0 left-0 right-0 bottom-0" />
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          className="flex-1"
          keyboardVerticalOffset={0}
        >
          <Pressable className="modal-overlay" onPress={handleClose}>
            <Pressable className="modal-container" onPress={(e) => e.stopPropagation()}>
              <View className="modal-header">
                <Text className="modal-title">New Subscription</Text>
                <Pressable className="modal-close" onPress={handleClose}>
                  <Text className="modal-close-text">✕</Text>
                </Pressable>
              </View>

              <ScrollView
                className="p-5"
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={{ gap: 20, paddingBottom: 20 }}
              >
                <View className="auth-field">
                  <Text className="auth-label">Name</Text>
                  <TextInput
                    className="auth-input"
                    placeholder="Subscription name"
                    placeholderTextColor="rgba(0, 0, 0, 0.4)"
                    value={name}
                    onChangeText={setName}
                  />
                </View>

                <View className="auth-field">
                  <Text className="auth-label">Price</Text>
                  <TextInput
                    className="auth-input"
                    placeholder="0.00"
                    placeholderTextColor="rgba(0, 0, 0, 0.4)"
                    value={price}
                    onChangeText={setPrice}
                    keyboardType="decimal-pad"
                  />
                </View>

                <View className="auth-field">
                  <Text className="auth-label">Frequency</Text>
                  <View className="picker-row">
                    <Pressable
                      className={`picker-option ${frequency === 'Monthly' ? 'picker-option-active' : ''}`}
                      onPress={() => setFrequency('Monthly')}
                    >
                      <Text className={`picker-option-text ${frequency === 'Monthly' ? 'picker-option-text-active' : ''}`}>
                        Monthly
                      </Text>
                    </Pressable>
                    <Pressable
                      className={`picker-option ${frequency === 'Yearly' ? 'picker-option-active' : ''}`}
                      onPress={() => setFrequency('Yearly')}
                    >
                      <Text className={`picker-option-text ${frequency === 'Yearly' ? 'picker-option-text-active' : ''}`}>
                        Yearly
                      </Text>
                    </Pressable>
                  </View>
                </View>

                <View className="auth-field">
                  <Text className="auth-label">Category</Text>
                  <View className="category-scroll">
                    {CATEGORIES.map((cat) => (
                      <Pressable
                        key={cat}
                        className={`category-chip ${category === cat ? 'category-chip-active' : ''}`}
                        onPress={() => setCategory(cat)}
                      >
                        <Text className={`category-chip-text ${category === cat ? 'category-chip-text-active' : ''}`}>
                          {cat}
                        </Text>
                      </Pressable>
                    ))}
                  </View>
                </View>

                <Pressable
                  className={`auth-button ${!isValidForm ? 'auth-button-disabled' : ''}`}
                  onPress={handleSubmit}
                  disabled={!isValidForm}
                >
                  <Text className="auth-button-text">Create Subscription</Text>
                </Pressable>
              </ScrollView>
            </Pressable>
          </Pressable>
        </KeyboardAvoidingView>
      </Modal>
    </>
  );
};

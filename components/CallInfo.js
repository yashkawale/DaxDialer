import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Button,
  TextInput,
  ScrollView,
} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import data from './data.json';

const CallInfo = () => {
  const [isPlay, setIsPlay] = useState(true);
  const [secondsRemaining, setSecondsRemaining] = useState(100);
  const [selectedValue, setSelectedValue] = useState('lead');
  const [note, setNote] = useState('');
  const [date, setDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [time, setTime] = useState(null);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const formattedDate = date ? date.toLocaleDateString() : 'Select a Date';
  const formattedTime = time ? time.toLocaleTimeString() : 'Select time';

  const handlePlay = () => {
    setIsPlay(!isPlay);
  };

  const onDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDate(selectedDate);
    }
  };
  const onTimeChange = (event, selectedTime) => {
    setShowTimePicker(false);
    if (selectedTime) {
      setTime(selectedTime);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (secondsRemaining > 0) {
        setSecondsRemaining(prevSeconds => prevSeconds - 1);
      } else {
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [secondsRemaining]);

  return (
    <SafeAreaView>
      <ScrollView>
        {/* Top and Middle */}
        <View style={tw`mt-6 ml-5`}>
          <Text style={tw`text-2xl font-bold text-black underline`}>
            CALL INFO
          </Text>
        </View>

        <View style={tw`flex flex-row items-center justify-between mt-6`}>
          <View style={tw`flex flex-row items-center ml-5`}>
            <View style={tw`p-4`}>
              <Image
                source={require('../assests/images/profile.png')}
                style={{height: 70, width: 70}}
              />
            </View>
            <View>
              <Text style={tw`text-xl font-bold`}>Yash Kawle</Text>
            </View>
          </View>
          <TouchableOpacity style={tw`m-5`}>
            <Image
              source={require('../assests/images/whatsapp.png')}
              style={{height: 45, width: 45}}
            />
          </TouchableOpacity>
        </View>

        <View style={tw`flex items-end mt-6 mx-6 border-t pt-4`}>
          <Text style={tw`text-xl font-semibold text-blue-500`}>Redial</Text>
        </View>

        {/* Lead Selection */}
        <View
          style={tw`flex flex-row items-center justify-between mt-6 mx-6 border-t pt-4`}>
          <View>
            <Text style={tw`text-lg font-semibold`}>Change Contact Type</Text>
          </View>
          <View>
            <Picker
              style={tw`w-40 text-blue-400`}
              selectedValue={selectedValue}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }>
              <Picker.Item label="LEAD" value="lead" />
              <Picker.Item label="Interested" value="interested" />
              <Picker.Item label="Not Interested" value="not-interested" />
              <Picker.Item label="Call Back" value="callback" />
              <Picker.Item label="DEMO_SCHEDULED" value="demo-scheduled" />
              <Picker.Item label="Interested-Hot" value="interested-hot" />
              <Picker.Item label="Interested-Warm" value="interested-warm" />
              <Picker.Item label="Interested-Cold" value="interested-cold" />
              <Picker.Item label="Quote Send" value="quote-send" />
              <Picker.Item
                label="Trial Installation"
                value="trial-installation"
              />
              <Picker.Item label="DEMO_SHOWN" value="demo-shown" />
            </Picker>
          </View>
        </View>

        {/* Assigned name */}
        <View
          style={tw`flex flex-row items-center justify-between mt-6 mx-6 border-t pt-4`}>
          <View>
            <Text style={tw`text-lg font-semibold`}>Assigned To</Text>
          </View>
          <View>
            <Text style={tw`text-xl font-semibold text-blue-500`}>Ted USR</Text>
          </View>
        </View>

        {/* Note section */}
        <View
          style={tw`flex flex-row items-center justify-between mt-6 mx-6 border-t pt-4`}>
          <View style={tw``}>
            <TextInput
              placeholder="Enter a Note"
              value={note}
              style={tw`text-lg`}
            />
          </View>
          <View style={tw``}>
            <Button title="Add Note" onPress={() => setNote(e.target.value)} />
          </View>
        </View>

        {/* Followup */}
        <View
          style={tw`flex flex-row items-center justify-between mt-6 mx-6 border-t pt-4`}>
          <View>
            <Text style={tw`text-lg font-semibold`}>Add Followup</Text>
          </View>

          <View>
            <View>
              <Button
                title="Select Date"
                onPress={() => setShowDatePicker(true)}
                style={tw``}
                color=""
              />
            </View>

            {showDatePicker && (
              <DateTimePicker
                value={date || new Date()}
                mode="date"
                display="calendar"
                onChange={onDateChange}
              />
            )}
          </View>

          <View>
            <Button
              title="Select Time"
              onPress={() => setShowTimePicker(true)}
            />
            {showTimePicker && (
              <DateTimePicker
                value={time || new Date()}
                mode="time"
                is24Hour={false}
                display="clock"
                onChange={onTimeChange}
              />
            )}
          </View>
        </View>

        <View
          style={tw`flex flex-row items-center justify-between mx-6 mt-2 border-b pb-4`}>
          <View style={tw`flex flex-row`}>
            <View>
              <Image
                source={require('../assests/images/calender.png')}
                style={{height: 18, width: 18}}
              />
            </View>
            <View>
              <Text style={tw`text-md underline pl-2`}>{formattedDate}</Text>
            </View>
          </View>

          <View style={tw`flex flex-row`}>
            <View>
              <Image
                source={require('../assests/images/clock.png')}
                style={{height: 18, width: 18}}
              />
            </View>
            <View>
              <Text style={tw`text-md underline pl-2`}>{formattedTime}</Text>
            </View>
          </View>
        </View>

        {/* Bottom */}
        <View style={tw`mt-4`}>
          <View
            style={tw`flex flex-row items-center justify-between ml-6 mr-6`}>
            <View style={tw`flex flex-row`}>
              <View>
                <Text style={tw`text-2xl font-bold text-black`}>
                  NEXT CALL IN:
                </Text>
              </View>
              <View style={tw`pl-2`}>
                <Text style={tw`text-2xl font-bold text-blue-500`}>
                  {secondsRemaining}
                </Text>
              </View>
            </View>
            <TouchableOpacity onPress={handlePlay}>
              <Image
                source={
                  isPlay
                    ? require('../assests/images/play.png')
                    : require('../assests/images/pause.png')
                }
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Next client */}
        <View>
          {data.map(item => (
            <View
              style={tw`bg-gray-200 mx-2 p-2 rounded-xl my-2`}
              key={item.id}>
              <View style={tw`flex flex-row items-center justify-between mx-4`}>
                <View style={tw`flex flex-row items-center`}>
                  <View>
                    <Image
                      source={require(`../assests/images/profile.png`)}
                      style={{height: 70, width: 70}}
                    />
                  </View>
                  <View style={tw`pl-4`}>
                    <View>
                      <Text style={tw`text-lg font-semibold`}>{item.name}</Text>
                    </View>
                    <View
                      style={tw`flex flex-row items-center justify-between`}>
                      <View>
                        <Text style={tw`bg-white`}>{item.lead}</Text>
                      </View>
                      <View style={tw`ml-2`}>
                        <Text>{item.abatz}</Text>
                      </View>
                    </View>
                    <View>
                      <Text>Attempts: {item.attempts}</Text>
                    </View>
                  </View>
                </View>
                <TouchableOpacity>
                  <Image source={require('../assests/images/call.png')} />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CallInfo;

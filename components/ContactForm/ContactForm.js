import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import {
    Button,
    Box,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    Textarea,
    createStandaloneToast
} from '@chakra-ui/react';

export const formUrl = process.env.NEXT_PUBLIC_FORM_URL;

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm();
    const [loading, setLoading] = useState(false);
    const message = createStandaloneToast();

    const showMessage = (status = 'success') => {
        const title =
            status === 'success'
                ? 'Message received'
                : 'Hmmm, looks like an error';
        const description =
            status === 'error'
                ? 'Try again or connect via socials above'
                : "I'll get back to you shortly";
        message({
            title,
            description,
            status,
            duration: 5000,
            isClosable: true
        });
    };

    async function sendForm(data) {
        setLoading(true);
        await axios
            .post(formUrl, data)
            .then(({ data }) => {
                const { redirect } = data;
                setLoading(false);
                showMessage();
                window.location.href = redirect;
            })
            .catch(function (error) {
                showMessage('error');
                setLoading(false);
                console.log(error.toJSON());
            });
    }

    return (
        <Box>
            <form onSubmit={handleSubmit(sendForm)}>
                <FormControl isInvalid={errors.name} mb={10}>
                    <FormLabel htmlFor="name">First name</FormLabel>
                    <Input
                        id="name"
                        {...register('name', {
                            required: 'Who dis? 🤷',
                            minLength: {
                                value: 4,
                                message: 'Minimum length should be 4'
                            }
                        })}
                    />
                    <FormErrorMessage>
                        {errors.name && errors.name.message}
                    </FormErrorMessage>
                </FormControl>
                <FormControl mb={10} isInvalid={errors.email}>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Input
                        id="email"
                        type="email"
                        {...register('email', {
                            required: "Don't forget your email address"
                        })}
                    />
                    <FormErrorMessage>
                        {errors.email && errors.email.message}
                    </FormErrorMessage>
                </FormControl>
                <FormControl mb={10} isInvalid={errors.message}>
                    <FormLabel>Message</FormLabel>
                    <Textarea
                        id="message"
                        {...register('message', {
                            required: 'What can I help you with?',
                            minLength: {
                                value: 4,
                                message: 'Minimum length should be 25'
                            }
                        })}
                    />
                </FormControl>
                <FormErrorMessage>
                    {errors.message && errors.message.message}
                </FormErrorMessage>
                <FormControl id="bot-field" mb={10} sx={{ display: 'none' }}>
                    <Input type="text" {...register('bot-field')} />
                </FormControl>

                <Button
                    isLoading={isSubmitting}
                    variant="primary"
                    colorScheme="teal"
                    maxW="200px"
                    type="submit"
                >
                    Send
                </Button>
            </form>
        </Box>
    );
}

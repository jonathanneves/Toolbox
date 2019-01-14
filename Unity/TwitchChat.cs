using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System;
using System.ComponentModel;
using System.Net.Sockets;
using System.IO;
using UnityEngine.UI;

namespace Scripts{
    
    public class TwitchChat : MonoBehaviour {

        private TcpClient twitchClient;
        private StreamReader reader;
        private StreamWriter writer;

        public Player player;
        public string username, password, channelName;

        public Text chatBox;

       void Start () {
            Connect();
       }

       void Update () {
            if (!twitchClient.Connected)
            {
                Connect();
            }   
            ReadChat();
       }

        private void Connect()
        {
            twitchClient = new TcpClient("irc.chat.twitch.tv", 6667);
            reader = new StreamReader(twitchClient.GetStream());
            writer = new StreamWriter(twitchClient.GetStream());

            writer.WriteLine("PASS " + password);
            writer.WriteLine("NICK " + username);
            writer.WriteLine("USER " + username + " 8 * :" + username);
            writer.WriteLine("JOIN  #" + channelName);
            writer.Flush();
        }
       
        private void ReadChat()
        {
            if (twitchClient.Available > 0)
            {
                var message = reader.ReadLine();    //Ler a msg atual

                if (message.Contains("PRIVMSG"))
                {
                    //get the users name by splitting it from the string
                    var splitPoint = message.IndexOf("!", 1);
                    var chatName = message.Substring(0, splitPoint);
                    chatName = chatName.Substring(1);

                    //Get the users message by splitting it from the string
                    splitPoint = message.IndexOf(":", 1);
                    message = message.Substring(splitPoint + 1);
                    print(String.Format("{0}: {1}", chatName, message));    
                    player.GameInputs(message);
                }
            }
        }
    }
}
